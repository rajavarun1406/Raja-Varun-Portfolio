import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="section" style={{ background: "var(--background-color)", minHeight: "100vh" }}>
      <div className="container">
        {/* Centered card with image and profile summary */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            overflow: "hidden",
            padding: 0,
            marginBottom: "3rem"
          }}
        >
          {/* Image section */}
          <div
            style={{
              flex: "1 1 300px",
              minHeight: "320px",
              background: "#434f40",
              position: "relative"
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/varun.jpeg"}
              alt="Raja Varun Kurapati"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.9,
                filter: "grayscale(20%)",
                display: "block",
              }}
            />
          </div>
          {/* Profile summary section */}
          <div
            style={{
              flex: "2 1 400px",
              padding: "3rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>
              About me...
            </h2>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.8", maxWidth: "600px" }}>
              Multi-disciplinary technologist with a track record of building data-driven, production-ready solutions across analytics, software & business domains. <br /><br />
              Experienced in designing automated data workflows, developing end-to-end analytics and machine learning systems and shipping full-stack applications that integrate seamlessly with cloud platforms. <br /><br />
              Comfortable partnering with stakeholders to clarify requirements, optimize business processes and turn complex data into clear, actionable stories that support better decisions and user experiences. <br /><br />

            </p>
          </div>
        </motion.div>

        {/* Story card below; scrolls into view */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ padding: "3rem" }}
        >
          <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
            My Story
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.8" }}>
            With one year as a Business Data Analyst at Lid Vizion, LLC, I design intelligent automation workflows, develop AI-driven data pipelines, and deploy computer vision applications that solve real business challenges. This role combines data engineering, full-stack development and analytics to create scalable tools that deliver tangible value. Earlier, during 1.5 years as a Full Stack Engineer at Infosys in India, I built and maintained production web applications using React, Node.js and REST APIs while collaborating across teams to ship reliable features. <br /><br />

            I recently completed my Master’s in Information Technology at Arizona State University, advancing skills in cloud computing, machine learning and large-scale data systems, building on my Bachelor’s in Computer Science from Amrita School of Engineering, Chennai. <br /><br />

            Beyond work and studies, I thrive on energetic pursuits and creativity. Volleyball keeps me active; hiking and road trips spark my sense of adventure and I always enjoy opportunities for teamwork, leadership and exploring new places. <br /><br />

            Throughout my journey, curiosity and a drive for impact have led me from university labs to collaborative industry environments always striving to learn more, build smarter and connect technology with people’s real needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
