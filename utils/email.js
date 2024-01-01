import nodemailer from 'nodemailer';
import emailT from './emailTemplate.js'
// Setup Transporter Services



const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
        user: "mahtabbhai420@gmail.com",
        pass: "sqIkPE4XRYpr8gvL",
    },
});

const maileFeatures = async () => {


    // Email generator
    var message = {
        from: "adil122@gmail.com",
        to: "sesoxi1159@ubinert.com,whomahtab@gmail.com",
        subject: "kuch to karo 😆",
        text: "Plaintext version of the message",
        html: emailT,
    };

    try {
        const response = await transporter.sendMail(message);
        console.log('Email sent successfully!', response);
    } catch (error) {
        console.error('Error sending the email:', error.message);
        return;
    }
}

export { maileFeatures };
