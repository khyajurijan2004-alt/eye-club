import React from "react";
import TryOnCamera from "../components/TryOn/TryOnCamera";
import Navbar from "../components/layout/Navbar";

const TryOnPage = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a" }}>
      <Navbar />
      <TryOnCamera />
    </div>
  );
};

export default TryOnPage;