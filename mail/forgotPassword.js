const forgotPasswordTemplate = (resetUrl) => {
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Réinitialisation de mot de passe</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
          }
          .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          .email-header {
            font-size: 24px;
            font-weight: bold;
            color: #4CAF50;
          }
          .email-body {
            font-size: 16px;
            color: #333333;
            margin-top: 20px;
          }
          .email-button {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
          }
          .email-footer {
            margin-top: 30px;
            font-size: 12px;
            color: #777777;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-header">Réinitialisation de votre mot de passe</div>
          <div class="email-body">
            <p>Vous recevez cet e-mail parce que vous (ou quelqu’un d’autre) avez demandé la réinitialisation de votre mot de passe.</p>
            <p>Veuillez cliquer sur le bouton ci-dessous pour réinitialiser votre mot de passe :</p>
            <a href="${resetUrl}" class="email-button">Réinitialiser mon mot de passe</a>
          </div>
          <div class="email-footer">
            <p>Si vous n'avez pas demandé cette réinitialisation, veuillez ignorer cet e-mail.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  
    return {
      subject: 'Jeton de réinitialisation du mot de passe',
      message: "Vous recevez cet e-mail parce que vous (ou quelqu’un d’autre) avez demandé la réinitialisation de votre mot de passe. Si vous n'avez pas demandé cette réinitialisation, veuillez ignorer cet e-mail.",
      html: htmlContent, // HTML for the e-mail body
    };
  };
  

  export default forgotPasswordTemplate