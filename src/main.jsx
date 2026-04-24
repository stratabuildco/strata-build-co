import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <main style={{ background: "#050505", color: "white", fontFamily: "Arial, sans-serif" }}>
      <section style={{ minHeight: "100vh", padding: "40px 24px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <div style={{ maxWidth: "900px" }}>
          <div style={{ marginBottom: "32px" }}>
            <div style={{ color: "#d6a43d", fontSize: "64px", fontWeight: "900", letterSpacing: "10px" }}>
              STRATA
            </div>
            <div style={{ letterSpacing: "8px", color: "#ddd" }}>BUILD CO.</div>
          </div>

          <p style={{ color: "#d6a43d", letterSpacing: "4px", fontWeight: "700", textTransform: "uppercase" }}>
            Fairfield County, CT
          </p>

          <h1 style={{ fontSize: "56px", lineHeight: "1.05", margin: "24px 0" }}>
            Modern Construction & Remodeling
          </h1>

          <p style={{ fontSize: "20px", color: "#bdbdbd", lineHeight: "1.7", maxWidth: "700px", margin: "0 auto" }}>
            STRATA Build Co. specializes in kitchen, bathroom, and interior renovations built with precision, clean craftsmanship, and reliable communication.
          </p>

          <div style={{ marginTop: "36px" }}>
            <a href="tel:12032120050" style={{ background: "#d6a43d", color: "black", padding: "16px 28px", borderRadius: "999px", textDecoration: "none", fontWeight: "800", display: "inline-block" }}>
              Request a Free Estimate
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#0b0b0b" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "40px", marginBottom: "30px" }}>Our Services</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              ["Kitchen Remodeling", "Cabinets, countertops, layouts, lighting, flooring, and finish upgrades."],
              ["Bathroom Remodeling", "Showers, tile, vanities, fixtures, flooring, and complete bathroom renovations."],
              ["Interior Renovations", "Trim, flooring, carpentry, repairs, and clean interior upgrades."]
            ].map(([title, text]) => (
              <div key={title} style={{ border: "1px solid #222", borderRadius: "24px", padding: "28px", background: "#050505" }}>
                <h3 style={{ color: "#d6a43d", fontSize: "24px" }}>{title}</h3>
                <p style={{ color: "#bdbdbd", lineHeight: "1.7" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "40px" }}>Why Choose STRATA</h2>
          <ul style={{ color: "#bdbdbd", lineHeight: "2", fontSize: "18px" }}>
            <li>Clear communication from estimate to completion</li>
            <li>Clean, organized job sites</li>
            <li>Premium materials and detailed craftsmanship</li>
            <li>Focused on kitchen, bathroom, and interior remodeling</li>
          </ul>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#d6a43d", color: "black", textAlign: "center" }}>
        <h2 style={{ fontSize: "42px" }}>Ready to start your project?</h2>
        <p style={{ fontSize: "18px" }}>Serving homeowners across Fairfield County, CT.</p>
        <a href="mailto:stratabuildco@gmail.com" style={{ background: "black", color: "white", padding: "16px 28px", borderRadius: "999px", textDecoration: "none", fontWeight: "800", display: "inline-block", marginTop: "20px" }}>
          Contact STRATA Build Co.
        </a>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
