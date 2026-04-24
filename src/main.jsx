import React from "react";
import { createRoot } from "react-dom/client";

const phoneDisplay = "(203) 212-0050";
const phoneHref = "tel:+12032120050";
const email = "stratabuildco@gmail.com";

function Logo({ small = false }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: small ? 10 : 16 }}>
      <div style={{ width: small ? 42 : 68 }}>
        <img src="/logo.png" alt="STRATA Build Co." style={{ width: "100%", display: "block" }} />
      </div>
      <div>
        <div style={{ color: "#fff", fontWeight: 900, letterSpacing: small ? 6 : 10, fontSize: small ? 22 : 44, lineHeight: 1 }}>
          STRATA
        </div>
        <div style={{ color: "#cfa349", fontWeight: 700, letterSpacing: small ? 3 : 7, fontSize: small ? 13 : 20, marginTop: 4 }}>
          BUILD CO.
        </div>
      </div>
    </div>
  );
}

function App() {
  const services = [
    {
      title: "Kitchen Remodeling",
      text: "Custom layouts, cabinetry, countertops, lighting, flooring, and full kitchen renovations.",
      image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e8d?auto=format&fit=crop&w=900&q=80",
      icon: "▦",
    },
    {
      title: "Bathroom Remodeling",
      text: "Showers, tile, vanities, fixtures, and complete bathroom transformations designed for comfort and style.",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=80",
      icon: "◫",
    },
    {
      title: "Interior Renovations",
      text: "Flooring, trim, carpentry, painting, and custom interior upgrades to enhance your home.",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
      icon: "⌂",
    },
  ];

  const benefits = [
    ["Clear Communication", "From estimate to completion, we keep you informed."],
    ["Clean & Organized", "Respect for your home and a clean job site every day."],
    ["Premium Craftsmanship", "High-end materials and meticulous attention to detail."],
    ["Focused Expertise", "We specialize in kitchens, bathrooms, and interiors."],
  ];

  return (
    <main style={{ background: "#050505", color: "#fff", fontFamily: "Arial, Helvetica, sans-serif" }}>
      <header style={{ position: "sticky", top: 0, zIndex: 20, background: "rgba(5,5,5,.94)", borderBottom: "1px solid rgba(207,163,73,.25)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <Logo small />
          <nav style={{ display: "flex", alignItems: "center", gap: 28, fontSize: 13, fontWeight: 700 }}>
            <a href="#home" style={navStyle}>HOME</a>
            <a href="#services" style={navStyle}>SERVICES</a>
            <a href="#about" style={navStyle}>ABOUT</a>
            <a href="#contact" style={{ ...navStyle, border: "1px solid #cfa349", padding: "12px 18px", borderRadius: 3 }}>GET A FREE ESTIMATE</a>
          </nav>
        </div>
      </header>

      <section id="home" style={{ minHeight: "760px", display: "grid", gridTemplateColumns: "1.05fr .95fr", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
        <div style={{ padding: "70px 22px", display: "flex", alignItems: "center", background: "linear-gradient(90deg,#050505 0%,#080808 72%,rgba(5,5,5,.45) 100%)" }}>
          <div style={{ maxWidth: 560, marginLeft: "auto", marginRight: 40 }}>
            <div style={{ marginBottom: 36 }}><Logo /></div>
            <p style={{ color: "#cfa349", letterSpacing: 3, fontWeight: 800, marginBottom: 18 }}>FAIRFIELD COUNTY, CT</p>
            <h1 style={{ fontSize: 56, lineHeight: 1.05, margin: "0 0 20px", fontWeight: 900 }}>
              Modern Construction<br />& Remodeling
            </h1>
            <p style={{ color: "#e7e7e7", fontSize: 18, lineHeight: 1.7, marginBottom: 32 }}>
              We specialize in high-end kitchen, bathroom, and interior renovations built with precision, integrity, and attention to detail.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 28 }}>
              <a href={phoneHref} style={primaryButton}>CALL FOR FREE ESTIMATE</a>
              <a href="#services" style={secondaryButton}>VIEW OUR WORK</a>
            </div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap", color: "#fff", fontWeight: 700 }}>
              <a href={phoneHref} style={contactLink}>☎ {phoneDisplay}</a>
              <span style={{ color: "#cfa349" }}>|</span>
              <a href={`mailto:${email}`} style={contactLink}>✉ {email}</a>
            </div>
          </div>
        </div>
        <div style={{ minHeight: 600, background: "linear-gradient(rgba(0,0,0,.15),rgba(0,0,0,.25)),url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80') center/cover" }} />
      </section>

      <section id="services" style={{ padding: "72px 22px 34px", background: "#050505" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#cfa349", letterSpacing: 3, fontWeight: 800, marginBottom: 12 }}>OUR SERVICES</p>
          <h2 style={{ fontSize: 34, margin: "0 0 32px", fontWeight: 900 }}>Quality Craftsmanship. Every Detail.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 22, textAlign: "left" }}>
            {services.map((service) => (
              <article key={service.title} style={{ border: "1px solid rgba(207,163,73,.35)", borderRadius: 10, overflow: "hidden", background: "#070707" }}>
                <img src={service.image} alt={service.title} style={{ width: "100%", height: 210, objectFit: "cover", display: "block" }} />
                <div style={{ padding: 24 }}>
                  <div style={{ color: "#cfa349", fontSize: 34, marginBottom: 10 }}>{service.icon}</div>
                  <h3 style={{ margin: "0 0 8px", fontSize: 21 }}>{service.title}</h3>
                  <p style={{ color: "#cfcfcf", lineHeight: 1.6, margin: 0 }}>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", marginTop: 36, borderTop: "1px solid rgba(255,255,255,.08)", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
        <div style={{ minHeight: 430, background: "url('https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80') center/cover" }} />
        <div style={{ padding: "70px 64px", background: "#080808" }}>
          <p style={{ color: "#cfa349", letterSpacing: 2.5, fontWeight: 800 }}>WHY CHOOSE STRATA</p>
          <h2 style={{ fontSize: 42, lineHeight: 1.05, margin: "12px 0 32px" }}>Built Different.<br />Built to Last.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: 28 }}>
            {benefits.map(([title, text]) => (
              <div key={title}>
                <h3 style={{ margin: "0 0 8px", color: "#fff", fontSize: 18 }}>{title}</h3>
                <p style={{ color: "#cfcfcf", lineHeight: 1.55, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ background: "#b8893a", color: "#050505", padding: "42px 22px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: 40 }}>
          <div>
            <h2 style={{ fontSize: 36, margin: "0 0 10px" }}>Ready to Start Your Project?</h2>
            <p style={{ margin: "0 0 22px", fontSize: 17 }}>Serving homeowners across Fairfield County, CT.</p>
            <a href={phoneHref} style={{ ...secondaryButton, background: "#050505", color: "#fff", borderColor: "#050505" }}>GET YOUR FREE ESTIMATE</a>
          </div>
          <div style={{ borderLeft: "1px solid rgba(0,0,0,.35)", paddingLeft: 46, fontSize: 26, fontWeight: 700 }}>
            <p style={{ margin: "0 0 20px" }}>☎ {phoneDisplay}</p>
            <p style={{ margin: 0 }}>✉ {email}</p>
          </div>
        </div>
      </section>

      <footer style={{ padding: "26px 22px", textAlign: "center", color: "#777", fontSize: 14 }}>
        © 2026 STRATA Build Co. • Modern Construction & Remodeling • Fairfield County, CT
      </footer>
    </main>
  );
}

const navStyle = {
  color: "#fff",
  textDecoration: "none",
};

const primaryButton = {
  background: "#cfa349",
  color: "#050505",
  padding: "16px 24px",
  borderRadius: 4,
  textDecoration: "none",
  fontWeight: 900,
  display: "inline-block",
};

const secondaryButton = {
  background: "transparent",
  color: "#fff",
  padding: "15px 24px",
  borderRadius: 4,
  border: "1px solid #cfa349",
  textDecoration: "none",
  fontWeight: 900,
  display: "inline-block",
};

const contactLink = {
  color: "#fff",
  textDecoration: "none",
};

createRoot(document.getElementById("root")).render(<App />);
