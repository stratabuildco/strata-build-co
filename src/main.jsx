import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div style={{ background: "black", color: "#d6a43d", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "50px", fontWeight: "bold" }}>
      STRATA SITE UPDATED
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
