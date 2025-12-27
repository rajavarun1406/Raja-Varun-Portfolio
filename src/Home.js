import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./index.css";

function Home() {
  return (
    <div className="section" style={{ minHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "40px" }}
      >
        {/* Left content: Text */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ fontSize: "3.5rem", marginBottom: "16px" }}
          >
            Welcome
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ fontSize: "2.5rem", color: "var(--text-secondary)", marginBottom: "24px" }}
          >
            I'm Raja Varun Kurapati
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ fontSize: "1.2rem", color: "var(--text-secondary)", marginBottom: "32px", maxWidth: "600px" }}
          >
            I thrive on solving intricate problems with intelligent, data-driven solutions that deliver real impact.
            With proven expertise in machine learning, automation workflows, and full-stack engineering, I craft scalable tools that empower teams and optimize business outcomes. <br /><br />
            Passionate about turning data into actionable insights, I excel at bridging technical innovation with user needs building everything from AI pipelines to responsive web applications.
            Committed to collaborative growth, I inspire teams to push boundaries and achieve excellence together.
          </motion.p>

          <motion.div
            style={{ display: "flex", gap: "20px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a href="https://github.com/rajavarun1406" target="_blank" rel="noopener noreferrer" style={{ fontSize: "2rem", color: "var(--text-primary)" }}>
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/raja-varun-kurapati-001a181a0/" target="_blank" rel="noopener noreferrer" style={{ fontSize: "2rem", color: "var(--secondary-color)" }}>
              <FaLinkedin />
            </a>
            <a href="mailto:rajavarunkurapati@gmail.com" style={{ fontSize: "2rem", color: "var(--primary-color)" }}>
              <FaEnvelope />
            </a>
          </motion.div>
        </div>

        {/* Right content: Image */}
        <motion.div
          style={{ flexShrink: 0 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <img
            src={process.env.PUBLIC_URL + "/raja.jpeg"}
            alt="Raja Varun Kurapati"
            style={{
              width: "280px",
              height: "340px",
              objectFit: "cover",
              borderRadius: "20px",
              boxShadow: "var(--shadow-lg)",
              border: "4px solid var(--surface-color)"
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
