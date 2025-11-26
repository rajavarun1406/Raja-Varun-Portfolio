import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Smart Parking Management",
    subtitle: "Full Stack Web Application • Computer Vision",
    description: [
      "Developed an AI-powered parking space web app using React, Node.js, and Roboflow API for vision-based empty slot detection.",
      "Features user management, guest bookings, analytics dashboard, and send email confirmations via SendGrid.",
    ],
    tools: "React, Node.js, Roboflow, Render"
  },
  {
    title: "Book Recommendation System",
    subtitle: "Analyzing Big Data • Arizona State University",
    description: [
      "Architected a scalable ML-powered recommendation engine processing 340,000+ literary works.",
      "Pioneered advanced similarity algorithms achieving 92% match precision for 100,000+ users.",
      "Reduced computation time by 45% via efficient data processing and generated 275,472 personalized suggestions.",
    ],
    tools: "Python, SQL, MongoDB, ML Libraries"
  },
  {
    title: "Real Estate Management System (REMS)",
    subtitle: "Advanced DB Management Systems • ASU",
    description: [
      "Designed a scalable relational database schema to boost data retrieval by 30%.",
      "Implemented audit logs for 100% integrity and regulatory compliance.",
      "Property categorization system reduced search times by 50%; improved analysis efficiency.",
    ],
    tools: "SQL, Python, Relational DB"
  },
  {
    title: "Hotel Booking Demand Dashboard",
    subtitle: "Data Visualization • Arizona State University",
    description: [
      "Analyzed 119,390 bookings to create a detailed Tableau performance dashboard.",
      "Designed strategic Tableau visualizations raising management decision-making accuracy by 30%.",
      "Used Tableau Prep Builder for preprocessing, improving data quality and insight delivery.",
    ],
    tools: "Tableau, Tableau Prep, Python"
  }
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

export default function Projects() {
  return (
    <section className="section" style={{ background: 'var(--background-color)' }}>
      <div className="container">
        <motion.h2
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: '2.5rem', marginBottom: '3rem' }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="projects-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}
        >
          {projects.map((proj, idx) => (
            <motion.div key={idx} className="card" variants={item}>
              <div className="project-title" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--primary-color)' }}>{proj.title}</div>
              <div className="project-subtitle" style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--secondary-color)', marginBottom: '1rem' }}>{proj.subtitle}</div>
              <ul className="project-desc-list" style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                {proj.description.map((desc, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{desc}</li>
                ))}
              </ul>
              <div className="project-tech" style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: '500' }}>
                <span style={{ color: 'var(--primary-color)' }}>Tools Used:</span> {proj.tools}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
