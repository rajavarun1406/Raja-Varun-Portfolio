import React from "react";

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
    link: "https://www.linkedin.com/learning/certificates/f694e9bec4efbb2a5ad7b098c036aabae7c3a7d21b98df7af9dbcd819a6f02c4", // add your certificate link if available
  },
];

export default function Certifications() {
  return (
    <section className="certifications-section">
      <h2>Certifications</h2>
      <ul className="certifications-list">
        {certifications.slice(0, 4).map((cert, idx) => (
          <li key={idx} className="certification-card">
            <div className="cert-title">{cert.title}</div>
            <div className="cert-meta">
              <span className="cert-issuer">{cert.issuer}</span>
              {" — "}
              <span className="cert-date">{cert.date}</span>
            </div>
            <a className="cert-link" href={cert.link} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
