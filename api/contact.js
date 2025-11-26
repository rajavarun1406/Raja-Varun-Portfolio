// Vercel Serverless Function for Contact Form
const nodemailer = require("nodemailer");

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ status: "error", message: "Method not allowed" });
    }

    const { name, email, subject, message } = req.body;

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER || "rajavarun.kurapati@gmail.com",
            pass: process.env.EMAIL_PASS || "gion lltn ivaw shdu" // REPLACE WITH ENV VARIABLE
        }
    });

    const mailOptions = {
        from: email,
        to: "rajavarun.kurapati@gmail.com",
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
}
