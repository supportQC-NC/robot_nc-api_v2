
import nodemailer from 'nodemailer';

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
    
    connectionTimeout: 60000, // Timeout en millisecondes (60 secondes)
    logger: true, // Active les logs
    debug: true, // Active le mode debug
  });

            
  const message = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    // Si options.isHtml est vrai, utilise le contenu HTML, sinon utilise le texte brut
    [options.isHtml ? 'html' : 'text']: options.message,
  };

  const info = await transporter.sendMail(message);

  console.log('Message sent: %s', info.messageId);
};




export default sendEmail;


