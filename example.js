const sgMail = require('@sendgrid/mail');
require('dotenv').config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'luis2016oro@gmail.com',
  from: 'ventas_culhuacan@speed-service.com.mx', // Use the email address or domain you verified above
  subject: 'XD',
  text: 'aDDDnd easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
