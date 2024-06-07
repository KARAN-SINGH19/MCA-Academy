const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


router.post('/sendEmail', async (req, res) => {

    const { name } = req.body
    const { email } = req.body
    const { phone } = req.body
    const { service } = req.body
    const { msg } = req.body

    const fullMessage = `${msg}\n\nContact Number: ${phone}\nService: ${service}`;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rehalkaran37@gmail.com', // COMPANY EMAIL
            pass: 'gsvy tkoh oysb hgpa'
        }
    });

    var mailOptions = {
        from: `${email}`, // USER EMAIL
        to: 'rehalkaran37@gmail.com', // COMPANY EMAIL
        subject: `
            Connection request by ${name}.
        `,
        text: fullMessage
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ success: "true", message: "mail sent" })
        }
    });
})

module.exports = router;
