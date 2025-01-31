const forgotPasswordTemplate = (resetUrl) => {
    return {
      subject: 'Réinitialisation de mot de passe - ROBOT NC',
      message: `Vous recevez cet e-mail parce que vous avez demandé une réinitialisation de mot de passe. Cliquez ici : ${resetUrl}`, // Texte brut
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Réinitialisation de mot de passe</title>
          <style>
            body {
              margin: 0;
              padding: 0;
              font-family: Arial, sans-serif;
              background-color: #f4f4f7;
              color: #333333;
            }
            .email-wrapper {
              max-width: 600px;
              margin: 20px auto;
              background: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .email-header {
              background: #1e90ff;
              color: #ffffff;
              padding: 20px;
              text-align: center;
            }
            .email-header h1 {
              margin: 0;
              font-size: 24px;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
            .email-body {
              padding: 20px;
            }
            .email-body h2 {
              font-size: 20px;
              margin-bottom: 10px;
              color: #333333;
            }
            .email-body p {
              font-size: 16px;
              margin-bottom: 20px;
              line-height: 1.5;
            }
            .email-button {
              display: inline-block;
              background: #1e90ff;
              color: #ffffff;
              padding: 10px 20px;
              text-decoration: none;
              border-radius: 5px;
              font-size: 16px;
              font-weight: bold;
              margin-bottom: 20px;
            }
            .email-footer {
              padding: 10px 20px;
              background: #f4f4f7;
              text-align: center;
              font-size: 12px;
              color: #777777;
            }
            .email-footer a {
              color: #1e90ff;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="email-wrapper">
            <div class="email-header">
              <h1>ROBOT NC</h1>
            </div>
            <div class="email-body">
              <h2>Réinitialisation de votre mot de passe</h2>
              <p>Vous recevez cet e-mail parce que vous (ou quelqu’un d’autre) avez demandé la réinitialisation de votre mot de passe pour l'application <strong>ROBOT NC</strong>.</p>
              <p>Veuillez cliquer sur le bouton ci-dessous pour réinitialiser votre mot de passe :</p>
              <a href="${resetUrl}" class="email-button">Réinitialiser mon mot de passe</a>
              <p>Si vous n'avez pas demandé cette réinitialisation, veuillez ignorer cet e-mail.</p>
            </div>
            <div class="email-footer">
              <p>Besoin d'aide ? Contactez-nous à <a href="mailto:support@robot-nc.com">support@robot-nc.com</a>.</p>
              <p>&copy; 2025 ROBOT NC. Tous droits réservés.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };
  };
  
  export default forgotPasswordTemplate;
  