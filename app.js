const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (CSS, JS) from 'public' folder
app.use(express.static('public'));

// Route to render your form (GET request)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');  // Path to your HTML form
});

// Route to handle form submission (POST request)
app.post('/submit', (req, res) => {
    const { firstName, email, message } = req.body;

    // Create the transporter using Hostinger SMTP
    const transporter = nodemailer.createTransport({
        host: 'gmail',
        port: 465,
        secure: true,
        auth: {
            user: "anastatsiou@gmail.com",  // Access environment variables correctly
            pass: "Gkousgkounis10@"
        }
    });

    // Set up email data
    const mailOptions = {
        from: "anastatsiou@gmail.com",  // Sender's email
        to: email,  // Receiver's email
        subject: `Message from ${firstName}`,
        text: message
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email: ' + error.toString());
        }
        res.send('Email sent successfully!');
    });
});

// Start the server
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${port}`);
});
