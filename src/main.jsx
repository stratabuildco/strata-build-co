import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div style={{
      background: "#050505",
      color: "white",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      fontFamily: "Arial, sans-serif"
    }}>
      <div>
        <h1 style={{ color: "#d6a43d", fontSize: "64px", letterSpacing: "8px" }}>
          STRATA
        </h1>
        <p style={{ fontSize: "22px", letterSpacing: "6px" }}>BUILD CO.</p>
        <p style={{ color: "#aaa" }}>
          Modern Construction & Remodeling in Fairfield County
        </p>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
