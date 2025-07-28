const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // load env

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors({ origin: true, methods: ['GET', 'POST'] }));
app.use(bodyParser.json());

app.use(express.static('public'));

// Email endpoint
app.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });

  // Email content
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: `New Message from ${name}`,
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `
  };

  // Send the email
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error('Email failed:', err);
      return res.status(500).json({ message: 'Failed to send email.', error: err.message });
    }

    console.log('Email sent:', info.response);
    return res.status(200).json({ message: 'Email sent successfully.' });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running, Ready to fire Emails!`);
});
