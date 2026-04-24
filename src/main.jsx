import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <main style={{ background: "#050505", color: "white", fontFamily: "Arial, sans-serif" }}>
      
      {/* HERO */}
      <section style={{ minHeight: "100vh", padding: "40px 24px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <div style={{ maxWidth: "900px" }}>

          {/* LOGO */}
          <img 
            src="/logo.png"
            alt="STRATA Build Co."
            style={{ width: "260px", marginBottom: "20px" }}
          />

          <p style={{ color: "#d6a43d", letterSpacing: "4px", fontWeight: "700", textTransform: "uppercase" }}>
            Fairfield County, CT
          </p>

          <h1 style={{ fontSize: "56px", lineHeight: "1.05", margin: "24px 0" }}>
            Modern Construction & Remodeling
          </h1>

          <p style={{ fontSize: "20px", color: "#bdbdbd", lineHeight: "1.7", maxWidth: "700px", margin: "0 auto" }}>
            STRATA Build Co. specializes in kitchen, bathroom, and interior renovations built with precision and clean craftsmanship.
          </p>

          {/* BOTÃO */}
          <div style={{ marginTop: "36px" }}>
            <a 
              href="tel:+12032120050" 
              style={{ background: "#d6a43d", color: "black", padding: "16px 28px", borderRadius: "999px", textDecoration: "none", fontWeight: "800", display: "inline-block" }}
            >
              Call for Free Estimate
            </a>
          </div>

          {/* CONTATO */}
          <div style={{ marginTop: "30px", color: "#bdbdbd" }}>
            <p>📞 (203) 212-0050</p>
            <p>✉️ stratabuildco@gmail.com</p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "80px 24px", background: "#0b0b0b" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "40px", marginBottom: "30px" }}>Our Services</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            
            <div style={{ border: "1px solid #222", borderRadius: "24px", padding: "28px" }}>
              <h3 style={{ color: "#d6a43d" }}>Kitchen Remodeling</h3>
              <p style={{ color: "#bdbdbd" }}>
                Cabinets, countertops, layouts, lighting, and finish upgrades.
              </p>
            </div>

            <div style={{ border: "1px solid #222", borderRadius: "24px", padding: "28px" }}>
              <h3 style={{ color: "#d6a43d" }}>Bathroom Remodeling</h3>
              <p style={{ color: "#bdbdbd" }}>
                Showers, tile, vanities, fixtures, and full renovations.
              </p>
            </div>

            <div style={{ border: "1px solid #222", borderRadius: "24px", padding: "28px" }}>
              <h3 style={{ color: "#d6a43d" }}>Interior Renovations</h3>
              <p style={{ color: "#bdbdbd" }}>
                Flooring, trim, carpentry, and clean interior upgrades.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "40px" }}>Why STRATA</h2>
          <ul style={{ color: "#bdbdbd", lineHeight: "2", fontSize: "18px" }}>
            <li>Clear communication from start to finish</li>
            <li>Clean, organized job sites</li>
            <li>High-end craftsmanship</li>
            <li>Focused remodeling expertise</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "#d6a43d", color: "black", textAlign: "center" }}>
        <h2 style={{ fontSize: "42px" }}>Ready to start your project?</h2>
        <p>Serving all Fairfield County</p>

        <a 
          href="mailto:stratabuildco@gmail.com"
          style={{ background: "black", color: "white", padding: "16px 28px", borderRadius: "999px", textDecoration: "none", fontWeight: "800", display: "inline-block", marginTop: "20px" }}
        >
          Email Us
        </a>
      </section>

    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
