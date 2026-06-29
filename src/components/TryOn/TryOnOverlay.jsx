import React, { useEffect, useState } from "react";

const TryOnOverlay = ({ status, faceDetected }) => {
  const [showGuide, setShowGuide] = useState(true);

  useEffect(() => {
    if (faceDetected) {
      const t = setTimeout(() => setShowGuide(false), 1000);
      return () => clearTimeout(t);
    } else {
      setShowGuide(true);
    }
  }, [faceDetected]);

  if (status === "loading") {
    return (
      <div style={{
        position: "absolute", inset: 0, background: "rgba(0,0,0,0.75)",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 10,
      }}>
        <div style={{
          width: 36, height: 36, border: "3px solid #C9A84C",
          borderTopColor: "transparent", borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
        }} />
        <p style={{ color: "#fff", fontFamily: "DM Sans, sans-serif", marginTop: 14, fontSize: "0.85rem" }}>
          Loading face detection...
        </p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (status === "permission") {
    return (
      <div style={{
        position: "absolute", inset: 0, background: "rgba(0,0,0,0.85)",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 10,
      }}>
        <div style={{ fontSize: "2rem", marginBottom: 10 }}>📷</div>
        <p style={{ color: "#fff", fontFamily: "DM Sans, sans-serif", textAlign: "center", maxWidth: 240, fontSize: "0.9rem" }}>
          Camera access denied. Please allow camera and refresh.
        </p>
      </div>
    );
  }

  if (status === "ready" && showGuide) {
    return (
      <div style={{
        position: "absolute", inset: 0, zIndex: 10,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      }}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <defs>
            <mask id="ovalMask">
              <rect width="100" height="100" fill="white" />
              <ellipse cx="50" cy="45" rx="15" ry="32" fill="black" />
            </mask>
          </defs>
          <rect width="100" height="100" fill="rgba(0,0,0,0.5)" mask="url(#ovalMask)" />
          <ellipse cx="50" cy="45" rx="15" ry="32" fill="none"
            stroke={faceDetected ? "#4CAF50" : "#C9A84C"}
            strokeWidth="0.7"
            strokeDasharray={faceDetected ? "0" : "2.5 1.5"}
            style={{ transition: "stroke 0.4s" }}
          />
        </svg>
        <p style={{
          position: "absolute", bottom: "12%",
          color: "#fff", fontFamily: "DM Sans, sans-serif", fontSize: "0.8rem",
          background: "rgba(0,0,0,0.55)", padding: "5px 14px", borderRadius: 20,
        }}>
          {faceDetected ? "✓ Face detected!" : "Align your face in the oval"}
        </p>
      </div>
    );
  }

  return null;
};

export default TryOnOverlay;