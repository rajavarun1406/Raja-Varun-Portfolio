import React from "react";

export default function About() {
  return (
    <section style={{ background: "#e7e8e3", minHeight: "100vh", width: "100vw", padding: "0", boxSizing: "border-box" }}>
      {/* Centered card with image and profile summary */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          padding: "48px 0 0 0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 2px 14px rgba(33,42,32,.08)",
            maxWidth: "960px",
            width: "100%",
            margin: "0 32px",
            overflow: "hidden",
          }}
        >
          {/* Image section */}
          <div
            style={{
              minWidth: "320px",
              maxWidth: "440px",
              background: "#434f40",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/varun.jpeg"}
              alt="Raja Varun Kurapati"
              style={{
                width: "100%",
                height: "100%",
                minHeight: "320px",
                objectFit: "cover",
                opacity: 0.83,
                filter: "grayscale(45%)",
                display: "block",
              }}
            />
          </div>
          {/* Profile summary section */}
          <div
            style={{
              padding: "52px 46px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              fontFamily: "'EB Garamond', Garamond, serif",
              maxWidth: "600px",
              minWidth: "320px"
            }}
          >
            <h2
              style={{
                fontFamily: "'EB Garamond', Garamond, serif",
                fontWeight: 700,
                fontSize: "2.3rem",
                color: "#223336",
                marginBottom: "22px",
                letterSpacing: "0.04em",
              }}
            >
              About me...
            </h2>
            <p
              style={{
                fontSize: "1.15rem",
                color: "#605e5eff",
                lineHeight: "1.5",
                marginBottom: "32px",
                fontFamily: "'EB Garamond', Garamond, serif",
                maxWidth: "500px",
              }}
            >
                Data engineering and computer vision enthusiast with a proven record of delivering scalable, high-impact solutions across industries. <br /><br />
                Strong experience building automated workflows, architecting machine learning systems & designing cloud-integrated web applications. 
                Adept at translating complex data into actionable insights and building full-stack products that drive measurable results. <br /><br />
                Skilled in collaborating with cross-functional teams to optimize analytics, automate business processes & deliver intuitive user experiences. 
                Passionate about continuous learning, mentoring peers & driving innovation with advanced engineering and analytics.            <br /><br />
            </p>
          </div>
        </div>
      </div>

      {/* Story card below; scrolls into view */}
      <div
        style={{
          background: "#fff",
          borderRadius: "14px",
          boxShadow: "0 2px 12px rgba(33,42,32,.07)",
          maxWidth: "960px",
          width: "100%",
          margin: "48px auto 48px auto",
          padding: "54px 40px 40px 40px",
        }}
      >
        <h2
          style={{
            color: "#223336",
            fontFamily: "'EB Garamond', Garamond, serif",
            fontWeight: 700,
            fontSize: "2rem",
            marginBottom: "30px",
            letterSpacing: "0.02em",
          }}
        >
          My Story
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#394739",
            lineHeight: "1.75",
            fontFamily: "'EB Garamond', Garamond, serif",
            marginBottom: "18px",
            maxWidth: "860px",
          }}
        >
          For the past Six months, I have been growing as a Business Data Analyst intern with Lidvizion, where I design and automate intelligent content workflows, develop AI-powered pipelines and deploy computer vision prototypes for real-world problems. 
          My role lets me blend data engineering, web development and client-focused analytics ensuring each project is both scalable and impactful.<br /><br />

          Currently, I am pursuing my Master’s in Information Technology at Arizona State University, deepening my expertise across cloud workflows, machine learning and data science. 
          My undergraduate journey was at Amrita School of Engineering, Chennai, where I earned my Bachelor’s in Computer Science, laying a strong foundation in deep learning and large-scale data solutions.<br /><br />

          Beyond work and studies, I thrive on energetic pursuits and creativity. Volleyball keeps me active; hiking and road trips spark my sense of adventure; and I always enjoy opportunities for teamwork, leadership and exploring new places.<br /><br />

          Throughout my journey, curiosity and a drive for impact have led me from university labs to collaborative industry environments always striving to learn more, build smarter and connect technology with people’s real needs.<br /><br />
        </p>
      </div>
    </section>
  );
}
