import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaLinkedin } from "react-icons/fa";

function Resume() {
  return (
    <section className="section" style={{ background: "var(--background-color)", minHeight: "90vh" }}>
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "2rem" }}
        >
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Resume</h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
            Click button below to download the most recent version of my resume.<br />
            Additional Details on{" "}
            <a href="https://www.linkedin.com/in/raja-varun-kurapati" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
              LinkedIn <FaLinkedin />
            </a>
          </p>
          <motion.a
            href="/Raja-Varun-Kurapati.pdf"
            download
            whileHover={{ scale: 1.05, backgroundColor: "var(--primary-color)", color: "white" }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.8rem 1.5rem",
              background: "transparent",
              color: "var(--primary-color)",
              border: "2px solid var(--primary-color)",
              borderRadius: "8px",
              fontWeight: "bold",
              textDecoration: "none",
              boxShadow: "var(--shadow-sm)",
              transition: "all 0.3s ease"
            }}
          >
            <FaDownload /> Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            width: "100%",
            maxWidth: "900px",
            height: "800px",
            background: "white",
            borderRadius: "12px",
            boxShadow: "var(--shadow-lg)",
            overflow: "hidden"
          }}
        >
          <iframe
            src="/Raja-Varun-Kurapati.pdf"
            title="Resume PDF"
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;
