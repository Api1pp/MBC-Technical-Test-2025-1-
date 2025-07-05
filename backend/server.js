// backend/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint untuk kirim email
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Validasi input
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Nama, email, dan pesan wajib diisi!",
    });
  }

  // Konfigurasi Nodemailer (Gmail)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD, // Gunakan App Password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "mbclab1234@gmail.com", // Ganti dengan email tujuan
    subject: `Pesan dari ${name} (${email})`,
    text: message,
    html: `
      <h3>Pesan Baru dari Website MBC Lab</h3>
      <p><strong>Nama:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Pesan:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({
      success: true,
      message: "Pesan terkirim!",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Gagal mengirim email.",
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
