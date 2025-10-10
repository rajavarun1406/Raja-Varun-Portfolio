import React, { useState, useEffect } from "react";
import "./Contact.css";

export default function Contact() {
  // On mount, show the details on the right
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // When the Contact component loads, float in the info after a short delay
    setTimeout(() => setShowDetails(true), 250);
  }, []);

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
  e.preventDefault();
  fetch("http://localhost:3000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form)
  })
    .then(res => res.json())
    .then(data => {
      if (data.status === "ok") setSubmitted(true);
    });
}


  return (
    <div className="contact-main">
      <div className="contact-title">CONTACT ME</div>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-row">
            <input
              type="text" name="name" placeholder="Name *"
              value={form.name} onChange={handleChange} required
            />
            <input
              type="email" name="email" placeholder="Email *"
              value={form.email} onChange={handleChange} required
            />
          </div>
          <input
            type="text" name="subject" placeholder="Subject"
            value={form.subject} onChange={handleChange}
          />
          <textarea
            name="message" placeholder="Message" rows={4}
            value={form.message} onChange={handleChange}
          />
          <button type="submit">Send</button>
          {submitted && <div className="thankyou-msg">Thank you for reaching out!</div>}
        </form>
        <div className="contact-divider" />
        <div className={`contact-details${showDetails ? " show" : ""}`}>
          <div className="contact-name">Raja Varun Kurapati</div>
          <div className="contact-email">rajavarun.kurapati@gmail.com</div>
        </div>
      </div>
    </div>
  );
}
