const express = require("express");
const emailHelper = require("./helpers/emailHelper");
const cors = require('cors')
const app = express();

// Middleware
app.use(express.json());

const whiteList=['https://speed-pro-desarrollo.web.app','http://localhost:4200','https://apputos.app'];

// Configuración de CORS
const corsOptions = {
    origin: function (origin, callback) {
      // Permitir requests sin origin (como Postman)
      if (!origin) {
        return callback(null, true);
      }
      
      if (whiteList.includes(origin)) {
        callback(null, origin);  // Retornamos el origen específico, no todos
      } else {
        callback(new Error('No permitido por CORS'));
      }
    },
    methods: ['GET', 'POST'],
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization'
    ],
    credentials: true
  };
  // Aplicar CORS
  app.use(cors(corsOptions));

// Routes
app.post("/send-email", async (req, res) => {
  const { from, to, subject, text, html,attachments} = req.body;

  try {
    let info = await emailHelper(from, to, subject, text, html, attachments);
    res.status(200).send(`Email sent: ${info.response}`);
  } catch (error) {
    res.status(500).send("Error sending email");
  }
});

app.get('/test', (req, res) => {
  res.status(200).send('Server is working');
});

// Start the server
app.listen(3500, () => {
  console.log(`Server is running on http://localhost:3500`);
});