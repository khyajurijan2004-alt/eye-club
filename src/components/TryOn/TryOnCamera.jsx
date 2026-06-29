import React, { useRef, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TryOnOverlay from "./TryOnOverlay";

import zephyr from "../../assets/products/Zephyr Rimless Gold.png";
import onyx from "../../assets/products/Onyx Navigator.png";
import luna from "../../assets/products/Luna Cat Eye.png";
import titan from "../../assets/products/Titan Aviator.png";

import zephyrTryon from "../../assets/products/tryon/zephyr-tryon.png";
import onyxTryon from "../../assets/products/tryon/onyx-tryon.png";
import lunaTryon from "../../assets/products/tryon/luna-tryon.png";
import titanTryon from "../../assets/products/tryon/titan-tryon.png";

const PRODUCTS = [
  { id: 1, name: "Zephyr Rimless Gold", material: "Titanium / Luxury", price: "NPR 12,500", oldPrice: "NPR 14,000", badge: "15% OFF", img: zephyr, tryOnImg: zephyrTryon, scale: 2.4, heightRatio: 0.3, yOffset: 0.08 },
  { id: 2, name: "Onyx Navigator", material: "Hand-Cut Acetate", price: "NPR 18,900", badge: null, img: onyx, tryOnImg: onyxTryon, scale: 2.6, heightRatio: 0.5, yOffset: 0.12 },
  { id: 3, name: "Luna Cat Eye", material: "Tortoiseshell / Feminine", price: "NPR 15,200", badge: "NEW", img: luna, tryOnImg: lunaTryon, scale: 2.6, heightRatio: 0.5, yOffset: 0.12 },
  { id: 4, name: "Titan Aviator", material: "Stainless Steel", price: "NPR 9,900", badge: null, img: titan, tryOnImg: titanTryon, scale: 2.8, heightRatio: 0.45, yOffset: 0.1 },
];

const TryOnCamera = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const faceMeshRef = useRef(null);
  const camRef = useRef(null);
  const imageCache = useRef({});
  const selectedRef = useRef(null);
  const navigate = useNavigate();

  const [selected, setSelected] = useState(PRODUCTS[0]);
  const [status, setStatus] = useState("loading");
  const [faceDetected, setFaceDetected] = useState(false);
  const [faceCount, setFaceCount] = useState(0);

  useEffect(() => { selectedRef.current = selected; }, [selected]);

  const drawGlassesOnFace = useCallback((ctx, landmarks, W, H, img) => {
    const product = selectedRef.current;
    const { scale = 3.0, heightRatio = 0.5, yOffset = 0.1 } = product;

    const toC = (lm) => ({ x: (1 - lm.x) * W, y: lm.y * H });
    const le = toC(landmarks[33]);
    const re = toC(landmarks[263]);

    const eyeW = Math.abs(re.x - le.x);
    const gw = eyeW * scale;
    const gh = gw * heightRatio;
    const cx = (le.x + re.x) / 2;
    const cy = (le.y + re.y) / 2 - eyeW * yOffset;
    const angle = Math.atan2(re.y - le.y, re.x - le.x);

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angle);
    ctx.scale(-1, -1);
    ctx.drawImage(img, -gw / 2, -gh / 2, gw, gh);
    ctx.restore();
  }, []);

  const drawAllFaces = useCallback((multiFaceLandmarks) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const currentProduct = selectedRef.current;
    if (!currentProduct) return;

    const render = (img) => {
      multiFaceLandmarks.forEach((landmarks) => {
        drawGlassesOnFace(ctx, landmarks, W, H, img);
      });
    };

    const tryOnSrc = currentProduct.tryOnImg;
    const cacheKey = `tryon-${currentProduct.id}`;

    if (imageCache.current[cacheKey]) {
      render(imageCache.current[cacheKey]);
    } else {
      const img = new Image();
      img.onload = () => {
        imageCache.current[cacheKey] = img;
        render(img);
      };
      img.src = tryOnSrc;
    }
  }, [drawGlassesOnFace]);

  useEffect(() => {
  const stopCamera = () => {
  // Stop video tracks immediately — this kills the camera indicator right away
  const video = videoRef.current;
  if (video && video.srcObject) {
    video.srcObject.getTracks().forEach(track => track.stop());
    video.srcObject = null;
  }
  // Stop MediaPipe in background — don't await, it's slow
  camRef.current?.stop();
  setTimeout(() => faceMeshRef.current?.close(), 0);
};

  const init = async () => {
    if (!window.FaceMesh || !window.Camera) {
      setTimeout(init, 200);
      return;
    }

    const stream = await navigator.mediaDevices
      .getUserMedia({ video: { width: 1280, height: 720, facingMode: "user" } })
      .catch(() => { setStatus("permission"); return null; });

    if (!stream || !videoRef.current) return;

    const video = videoRef.current;
    video.srcObject = stream;
    video.play();
    setStatus("ready");

    video.onloadedmetadata = () => {
      const c = canvasRef.current;
      if (c) { c.width = video.videoWidth; c.height = video.videoHeight; }
    };

    const faceMesh = new window.FaceMesh({
      locateFile: (f) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${f}`,
    });
    faceMesh.setOptions({
      maxNumFaces: 5,
      refineLandmarks: false,
      minDetectionConfidence: 0.4,
      minTrackingConfidence: 0.4,
    });
    faceMesh.onResults((results) => {
      const faces = results.multiFaceLandmarks ?? [];
      if (!faces.length) {
        setFaceDetected(false);
        setFaceCount(0);
        const c = canvasRef.current;
        if (c) c.getContext("2d").clearRect(0, 0, c.width, c.height);
        return;
      }
      setFaceDetected(true);
      setFaceCount(faces.length);
      drawAllFaces(faces);
    });
    faceMeshRef.current = faceMesh;

    const cam = new window.Camera(video, {
      onFrame: async () => { await faceMesh.send({ image: video }); },
      width: 1280, height: 720,
    });
    cam.start();
    camRef.current = cam;
  };

  init();

  return () => stopCamera();
}, [drawAllFaces]);

  const takeScreenshot = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const tmp = document.createElement("canvas");
    tmp.width = video.videoWidth; tmp.height = video.videoHeight;
    const ctx = tmp.getContext("2d");
    ctx.translate(tmp.width, 0); ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.drawImage(canvas, 0, 0);
    const link = document.createElement("a");
    link.download = "eyeclub-tryon.png";
    link.href = tmp.toDataURL("image/png");
    link.click();
  };

  return (
    <div style={{ padding: "28px 40px 48px", maxWidth: 1200, margin: "0 auto" }}>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
        <button onClick={() => navigate(-1)} style={{
          display: "flex", alignItems: "center", gap: 6,
          background: "none", border: "none", color: "#C9A84C",
          fontFamily: "DM Sans, sans-serif", fontSize: "0.88rem", cursor: "pointer", padding: 0,
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back
        </button>
        <div>
          <h1 style={{ fontFamily: "Bodoni Moda, serif", fontSize: "1.8rem", color: "#C9A84C", margin: 0 }}>
            Virtual Try-On
          </h1>
          <p style={{ fontFamily: "DM Sans, sans-serif", color: "#666", fontSize: "0.82rem", margin: "2px 0 0" }}>
            See how our frames look on you — in real time
            {faceCount > 1 && (
              <span style={{ color: "#C9A84C", marginLeft: 8 }}>
                · {faceCount} faces detected
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Main layout */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 24, alignItems: "start" }}>

        {/* Left: Camera */}
        <div>
          <div style={{ position: "relative", borderRadius: 14, overflow: "hidden", background: "#111", aspectRatio: "16/9" }}>
            <video ref={videoRef}
              style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", transform: "scaleX(-1)" }}
              playsInline muted
            />
            <canvas ref={canvasRef}
              style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0 }}
            />
            <TryOnOverlay status={status} faceDetected={faceDetected} />

            {faceDetected && (
              <div style={{
                position: "absolute", bottom: 14, left: 14,
                background: "rgba(0,0,0,0.65)", borderRadius: 8,
                padding: "6px 14px", display: "flex", alignItems: "center", gap: 8,
              }}>
                <img src={selected.img} alt={selected.name}
                  style={{ width: 32, height: 32, objectFit: "cover", borderRadius: 4 }} />
                <div>
                  <div style={{ color: "#C9A84C", fontFamily: "DM Sans, sans-serif", fontSize: "0.78rem", fontWeight: 600 }}>
                    {selected.name}
                  </div>
                  <div style={{ color: "#aaa", fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem" }}>
                    {faceCount > 1 ? `On ${faceCount} people` : selected.price}
                  </div>
                </div>
              </div>
            )}
          </div>

          <button onClick={takeScreenshot} disabled={status !== "ready"}
            style={{
              marginTop: 14, width: "100%", padding: "12px",
              background: status === "ready" ? "#C9A84C" : "#333",
              color: status === "ready" ? "#000" : "#666",
              border: "none", borderRadius: 8, cursor: status === "ready" ? "pointer" : "not-allowed",
              fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: "0.9rem",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            Save Photo
          </button>
        </div>

        {/* Right: Product list */}
        <div style={{ background: "#111", borderRadius: 14, padding: 16, maxHeight: "calc(56.25vw * 0.6)", overflowY: "auto" }}>
          <p style={{
            fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem", letterSpacing: "2px",
            color: "#666", marginBottom: 14, marginTop: 0,
          }}>
            SELECT FRAME
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {PRODUCTS.map((product) => (
              <div key={product.id} onClick={() => setSelected(product)}
                style={{
                  display: "flex", gap: 12, alignItems: "center",
                  padding: "10px 12px", borderRadius: 10, cursor: "pointer",
                  border: selected.id === product.id ? "1.5px solid #C9A84C" : "1.5px solid #222",
                  background: selected.id === product.id ? "rgba(201,168,76,0.08)" : "#1a1a1a",
                  transition: "all 0.2s",
                }}>
                <img src={product.img} alt={product.name}
                  style={{ width: 60, height: 60, objectFit: "cover", borderRadius: 8, flexShrink: 0, background: "#F0EDE6" }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontFamily: "DM Sans, sans-serif", fontSize: "0.82rem", fontWeight: 600,
                    color: selected.id === product.id ? "#C9A84C" : "#fff",
                    whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                  }}>
                    {product.name}
                  </div>
                  <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem", color: "#666", marginTop: 2 }}>
                    {product.material}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}>
                    <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.8rem", fontWeight: 600, color: "#fff" }}>
                      {product.price}
                    </span>
                    {product.badge && (
                      <span style={{
                        fontSize: "0.62rem", fontWeight: 700, letterSpacing: "1px",
                        background: product.badge === "NEW" ? "#8B6914" : "#C9A84C",
                        color: product.badge === "NEW" ? "#fff" : "#000",
                        padding: "2px 7px", borderRadius: 10,
                        fontFamily: "DM Sans, sans-serif",
                      }}>
                        {product.badge}
                      </span>
                    )}
                  </div>
                </div>
                {selected.id === product.id && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryOnCamera;
