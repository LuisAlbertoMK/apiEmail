const nodemailer = require('nodemailer');

enviarEmail = async () =>{
    const config = {
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'desarrollospeed03@gmail.com',
            pass: 'luip koqz dzwb vghl'
        }
    }
    const mensaje = {
        from: 'desarrollospeed03@gmail.com',
        to: 'desarrollospeed03@gmail.com',
        subject: 'Test Email',
        text: 'envio de correo usando nodemailer'
    }
    // Create a transporter object
    let transporter = nodemailer.createTransport(config);

    const info = await transporter.sendMail(mensaje)

    console.log(info)
}

enviarEmail();