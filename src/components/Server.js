// components/server.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const PORT = 5000; // Changed to 5000 to avoid conflict with React

// Enable JSON and CORS
app.use(express.json());
app.use(cors());

// Configure Nodemailer transporter (Use an app password for Gmail - see Google instructions)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rajavarun.kurapati@gmail.com",       // replace with your Gmail address
    pass: "gion lltn ivaw shdu"      // Google “App password”, not your normal password
  }
});

// Contact endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: "rajavarun.kurapati@gmail.com",        // where you want to receive mail
    subject: `Contact Form: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ status: "ok" });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ status: "error", error: err.toString() });
  }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
