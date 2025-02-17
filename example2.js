const {MailerSend, Recipient, EmailParams } = require("mailersend"); // Asegúrate de usar .default

require('dotenv').config();

const mailersend = new MailerSend({
    apiKey: process.env.AppUtos_API_KEY,
});

const recipients = [new Recipient("desarrollospeed03@gmail.com")];

const emailParams = new EmailParams()
    .setFrom("mkoromini94@gmail.com")
    .setFromName("MK")
    .setRecipients(recipients)
    .setSubject("Subject")
    .setHtml("Greetings from the team, you got this message through MailerSend.")
    .setText("Greetings from the team, you got this message through MailerSend.");

const sendEmail = async () => {
    try {
        const response = await mailersend.send(emailParams);
        console.log('Email sent successfully:', response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

sendEmail();