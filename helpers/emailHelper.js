const { Attachment } = require("mailersend");
const nodemailer = require("nodemailer");

const emailHelper = async (from, to, subject, text, html,attachments) => {
  // Create a transporter
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "desarrollospeed03@gmail.com",
      pass: "luip koqz dzwb vghl",
    },
  });

  const email = `${from}`
  // console.log(email)
  // Set up email options
  let mailOptions = {
    from: {
      name: "AppUtos",
      address: `Bienvenido`
    } ,
    to,
    subject,
    text,
    html,
    attachments
  };

  // console.log(mailOptions);
  // Send the email
  try {
    let info = await transporter.sendMail(mailOptions);
    // console.log("Email sent: " + info.response);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};



module.exports = emailHelper;