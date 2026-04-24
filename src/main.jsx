import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <main style={{ background: "#050505", color: "white", minHeight: "100vh", fontFamily: "Arial, sans-serif", padding: "60px 24px", textAlign: "center" }}>
      <img src="/logo.png" alt="STRATA Build Co." style={{ width: "260px", maxWidth: "80%", marginBottom: "30px" }} />

      <h1 style={{ fontSize: "52px", margin: "0 0 20px" }}>
        Modern Construction & Remodeling
      </h1>

      <p style={{ color: "#bdbdbd", fontSize: "20px", maxWidth: "700px", margin: "0 auto 30px", lineHeight: "1.6" }}>
        Kitchen, bathroom, and interior renovations across Fairfield County, CT.
      </p>

      <a href="tel:+12032120050" style={{ background: "#d6a43d", color: "black", padding: "16px 28px", borderRadius: "999px", textDecoration: "none", fontWeight: "bold", display: "inline-block" }}>
        Call for Free Estimate
      </a>

      <div style={{ marginTop: "30px", color: "#bdbdbd" }}>
        <p>📞 (203) 212-0050</p>
        <p>✉️ stratabuildco@gmail.com</p>
      </div>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
