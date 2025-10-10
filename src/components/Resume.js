import React from "react";

function Resume() {
  return (
    <div className="resume-page">
      <div className="resume-download-section">
        <h1 className="resume-title">Resume</h1>
        <p>
          Click button below to download the most recent version of my resume.<br />
          Additional Details on
          {" "}
          <a href="https://www.linkedin.com/in/raja-varun-kurapati" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>.
        </p>
        <a
          href="/Raja-Varun-Kurapati.pdf"
          download
          className="resume-download-btn"
        >
          Download Resume
        </a>
      </div>
      <iframe
        src="/Raja-Varun-Kurapati.pdf"
        title="Resume PDF"
        className="resume-iframe"
      />
    </div>
  );
}

export default Resume;
