import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Use relative path for Vercel serverless function
    const apiUrl = process.env.NODE_ENV === 'production'
      ? '/api/contact'
      : 'http://localhost:5000/api/contact';

    fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === "ok") setSubmitted(true);
      })
      .catch(err => {
        console.error("Error submitting form:", err);
        setSubmitted(true);
      });
  }

  return (
    <section className="section" style={{ background: "var(--background-color)", minHeight: "90vh", display: "flex", alignItems: "center" }}>
      <div className="container">
        <motion.div
          className="card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem" }}
        >
          <h2 className="text-center" style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Contact Me</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <form className="contact-form" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <input
                  type="text" name="name" placeholder="Name *"
                  value={form.name} onChange={handleChange} required
                  style={{ flex: 1, padding: "1rem", borderRadius: "8px", border: "1px solid #ddd", fontSize: "1rem" }}
                />
                <input
                  type="email" name="email" placeholder="Email *"
                  value={form.email} onChange={handleChange} required
                  style={{ flex: 1, padding: "1rem", borderRadius: "8px", border: "1px solid #ddd", fontSize: "1rem" }}
                />
              </div>
              <input
                type="text" name="subject" placeholder="Subject"
                value={form.subject} onChange={handleChange}
                style={{ padding: "1rem", borderRadius: "8px", border: "1px solid #ddd", fontSize: "1rem", width: "100%" }}
              />
              <textarea
                name="message" placeholder="Message" rows={6}
                value={form.message} onChange={handleChange}
                style={{ padding: "1rem", borderRadius: "8px", border: "1px solid #ddd", fontSize: "1rem", width: "100%", resize: "vertical" }}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: "1rem 2rem",
                  background: "var(--primary-color)",
                  color: "white",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  alignSelf: "flex-start"
                }}
              >
                Send Message
              </motion.button>
              {submitted && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="thankyou-msg" style={{ color: "green", fontWeight: "bold", marginTop: "1rem" }}>Thank you for reaching out!</motion.div>}
            </form>

            <div style={{ borderTop: "1px solid #eee", paddingTop: "2rem", textAlign: "center" }}>
              <div style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Raja Varun Kurapati</div>
              <div style={{ color: "var(--text-secondary)" }}>rajavarun.kurapati@gmail.com</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
