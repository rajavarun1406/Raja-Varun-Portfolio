import React from "react";
import "./index.css"; // Ensure global styles

function Home() {
  return (
    <div
      style={{
        background: "#e7e8e3",
        minHeight: "440px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "54px 0",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "980px",
          padding: "40px 48px",
          background: "#fff",
          borderRadius: "7px",
          boxShadow: "0 2px 12px rgba(33,42,32,.06)",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Left content: Text */}
        <div style={{ flex: 1, paddingRight: "36px" }}>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              color: "#223336",
              fontFamily: "EB Garamond, Garamond, serif",
              marginBottom: "16px",
              textAlign: "left",
              letterSpacing: "0.7px",
            }}
          >
            Welcome
          </h1>
          <h2
            style={{
              fontFamily: "EB Garamond, Garamond, serif",
              fontSize: "2.05rem",
              fontWeight: "700",
              color: "#000000ff",
              marginTop: "0",
              marginBottom: "8px",
              textAlign: "left",
              letterSpacing: "0.6px",
            }}
          >
            I'm Raja Varun Kurapati
          </h2>
          <p
            style={{
              fontSize: "1.18rem",
              color: "#444",
              maxWidth: "700px",
              margin: "0",
              textAlign: "left",
              fontFamily: '"EB Garamond", Garamond, serif',
              lineHeight: "1.6",
            }}
          >
            I thrive on cracking complex challenges and bringing intelligent, data-powered solutions to life.
            With hands-on expertise in machine learning, automation and full-stack development.
            I'm dedicated to inspiring innovation, empowering users, and growing alongside dynamic teams.
          </p>
        </div>
        {/* Right content: Image */}
        <div style={{ flexShrink: 0, width: "220px" }}>
          <img
            src={process.env.PUBLIC_URL + "/raja.png.bmp"}
            alt="Raja Varun Kurapati"
            style={{
              width: "200px",
              height: "240px",
              objectFit: "cover",
              borderRadius: "12px",
              boxShadow: "0 2px 12px rgba(33,42,32,.10)",
              marginLeft: "auto",
              display: "block",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
