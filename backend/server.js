// This file is intentionally disabled.
// Previously used Express + Resend for sending emails.
// Now switched to Formspree (frontend-only).
//

// import express from 'express'
// import cors from 'cors'
// import bodyParser from 'body-parser'
// import dotenv from 'dotenv'
// import { Resend } from 'resend'

// dotenv.config()

// const app = express()
// const PORT = process.env.PORT || 5000

// // Middlewares
// app.use(cors({ origin: true, methods: ['GET', 'POST'] }))
// app.use(bodyParser.json())
// app.use(express.static('public'))

// const resend = new Resend(process.env.RESEND_KEY)

// app.post('/send', async (req, res) => {
//   const { name, email, message } = req.body

//   // Validation
//   if (!name || !email || !message) {
//     return res.status(400).json({ message: 'All fields are required.' })
//   }

//   try {
//     await resend.emails.send({
//       from: 'Portfolio Mail - <onboarding@resend.dev>',
//       to: process.env.GMAIL_USER,
//       reply_to: email,
//       subject: `New message from ${name}`,
//       html: `
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `,
//     })
//     //Logs
//     console.log(`Email from: ${name} <${email}>`)
//     console.log(`Message: ${message}`)

//     res.status(200).json({ message: 'Email sent successfully.' })
//   } catch (err) {
//     console.error('❌ Email failed:', err)
//     res
//       .status(500)
//       .json({ message: 'Failed to send email.', error: err.message })
//   }
// })

// app.listen(PORT, () => {
//   console.log(`🚀 Server is running on port ${PORT}`)
// })
console.log("Backend disabled. Portfolio is static. Using Formspree for emails.");

