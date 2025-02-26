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
    console.log('Form submitted:', req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'anastatsiou@gmail.com',
            pass: 'jsfx tyvr ktov dfjv'
        }
    });

    const mailOptions = {
        from: 'anastatsiou@gmail.com',
        to: email,
        subject: `Message from ${firstName}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
            return res.status(500).send('Error sending email: ' + error.toString());
        }
        console.log('Email sent:', info);
        res.send('Email sent successfully!');
    });
});

// Start the server
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${port}`);
});
