const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import CORS

const app = express();

const port = 3000
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

    // Create the transporter using your Gmail and App Password
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'anastatsiou@gmail.com',  // Your Gmail address
            pass: 'cuqq jdai ffnv bffs'  // Your App Password
        }
    });

    // Set up email data
    const mailOptions = {
        from: 'anastatsiou@gmail.com',  // Sender's email (user's input)
        to: email,  // Your email address (where the message will be sent)
        subject: `Message from ${firstName}`,  // Subject line
        text: message  // The message body
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
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
