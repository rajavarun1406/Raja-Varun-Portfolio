import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  {
    title: "AWS Certified Data Engineer – Associate",
    issuer: "Amazon Web Services (AWS)",
    date: "June 2025",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/390106a409e249f1ba07de44884434c9",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS)",
    date: "March 2022",
    link: "https://drive.google.com/file/d/1m_ZXfZ3mVGFrMpPYpuhSTmm6OEDASSPg/view",
  },
  {
    title: "Cisco Networking Foundations",
    issuer: "LinkedIn",
    date: "April 2023",
    link: "https://www.linkedin.com/learning/certificates/f694e9bec4efbb2a5ad7b098c036aabae7c3a7d21b98df7af9dbcd819a6f02c4",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Certifications() {
  return (
    <section className="section" style={{ background: "var(--background-color)", minHeight: "90vh" }}>
      <div className="container">
        <motion.h2
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: "2.5rem", marginBottom: "3rem" }}
        >
          Certifications
        </motion.h2>
        <motion.ul
          className="certifications-list"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            listStyle: "none",
            padding: 0
          }}
        >
          {certifications.map((cert, idx) => (
            <motion.li key={idx} className="card" variants={item} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <div className="cert-title" style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.5rem", color: "var(--primary-color)" }}>{cert.title}</div>
              <div className="cert-meta" style={{ marginBottom: "1rem", color: "var(--text-secondary)" }}>
                <span className="cert-issuer" style={{ fontWeight: "500" }}>{cert.issuer}</span>
                <br />
                <span className="cert-date" style={{ fontSize: "0.9rem" }}>{cert.date}</span>
              </div>
              <a
                className="cert-link"
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "var(--secondary-color)",
                  fontWeight: "500"
                }}
              >
                View Certificate <FaExternalLinkAlt size={12} />
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
