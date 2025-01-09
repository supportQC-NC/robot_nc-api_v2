const welcomeEmailTemplate = (userName) => {
    return {
      subject: 'Bienvenue chez ROBOT NC !',
      message: `Bonjour ${userName}, bienvenue dans l'application ROBOT NC !`, // Texte brut
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Bienvenue chez ROBOT NC</title>
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
            .email-body .highlight {
              font-weight: bold;
              color: #1e90ff;
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
              <h2>Bienvenue, ${userName} !</h2>
              <p>Nous sommes ravis de vous compter parmi les utilisateurs de <strong>ROBOT NC</strong>.</p>
              <p>Avec ROBOT NC, vous pouvez gérer vos tâches efficacement et découvrir un monde de fonctionnalités adaptées à vos besoins.</p>
              <p class="highlight">N'hésitez pas à explorer votre tableau de bord et à configurer votre profil dès maintenant !</p>
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
  
  export default welcomeEmailTemplate;
  