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
              Data engineering and computer vision enthusiast with a proven record of delivering scalable, high-impact solutions across industries. <br /><br />
              Strong experience building automated workflows, architecting machine learning systems & designing cloud-integrated web applications.
              Adept at translating complex data into actionable insights and building full-stack products that drive measurable results. <br /><br />
              Skilled in collaborating with cross-functional teams to optimize analytics, automate business processes & deliver intuitive user experiences.
              Passionate about continuous learning, mentoring peers & driving innovation with advanced engineering and analytics.
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
            For the past Six months, I have been growing as a Business Data Analyst intern with Lidvizion, where I design and automate intelligent content workflows, develop AI-powered pipelines and deploy computer vision prototypes for real-world problems.
            My role lets me blend data engineering, web development and client-focused analytics ensuring each project is both scalable and impactful.<br /><br />

            Currently, I am pursuing my Master’s in Information Technology at Arizona State University, deepening my expertise across cloud workflows, machine learning and data science.
            My undergraduate journey was at Amrita School of Engineering, Chennai, where I earned my Bachelor’s in Computer Science, laying a strong foundation in deep learning and large-scale data solutions.<br /><br />

            Beyond work and studies, I thrive on energetic pursuits and creativity. Volleyball keeps me active; hiking and road trips spark my sense of adventure; and I always enjoy opportunities for teamwork, leadership and exploring new places.<br /><br />

            Throughout my journey, curiosity and a drive for impact have led me from university labs to collaborative industry environments always striving to learn more, build smarter and connect technology with people’s real needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
