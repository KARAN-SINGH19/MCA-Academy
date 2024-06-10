const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/sendEmail', async (req, res) => {

    const { name, email, phone, service, msg } = req.body;

    const fullMessage = `Contact Number: ${phone}\nService: ${service}\nEmail: ${email}\n\n${msg}`;

    var transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false,
        auth: {
            user: 'malahim.k@mcagulf.com', // COMPANY EMAIL
            pass: 'your-outlook-email-password'
        }
    });

    var mailOptions = {
        from: `${email}`, // USER EMAIL
        to: 'malahim.k@mcagulf.com', // COMPANY EMAIL
        subject: `Connection request by ${name}.`,
        text: fullMessage
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).json({ success: "false", message: "mail not sent", error: error.message });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ success: "true", message: "mail sent" });
        }
    });
});

module.exports = router;
