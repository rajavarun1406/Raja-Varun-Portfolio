import React from "react";

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
  },
  {
    title: "Leaf Disease Detection",
    subtitle: "Deep Learning Project • Amrita School of Engineering",
    description: [
      "CNN model achieved 99.2% accuracy in disease prediction for tomato, potato, and corn crops.",
      "Developed TensorFlow pipeline for detecting diseases across 38 classes using Kaggle with 87,000+ images.",
    ],
    tools: "Python, TensorFlow, Kaggle"
  }
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 >Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card">
            <div className="project-title">{proj.title}</div>
            <div className="project-subtitle">{proj.subtitle}</div>
            {/* <div className="project-meta">{proj.university} • {proj.date}</div> */}
            <ul className="project-desc-list">
              {proj.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            <div className="project-tech">
              <span>Tools Used:</span> {proj.tools}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
