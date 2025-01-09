const forgotPasswordTemplate = (resetUrl) => {
    return {
      subject: 'Réinitialisation de mot de passe',
      message: `Vous recevez cet e-mail parce que vous avez demandé une réinitialisation de mot de passe. Cliquez ici : ${resetUrl}`, // Texte brut
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px; }
            .button { display: inline-block; padding: 10px 20px; margin-top: 20px; background-color: #4CAF50; color: #fff; text-decoration: none; border-radius: 5px; }
            .footer { margin-top: 20px; font-size: 12px; color: #777; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>Réinitialisation de votre mot de passe</h2>
            <p>Vous recevez cet e-mail parce que vous (ou quelqu’un d’autre) avez demandé la réinitialisation de votre mot de passe.</p>
            <p>Veuillez cliquer sur le bouton ci-dessous pour réinitialiser votre mot de passe :</p>
            <a href="${resetUrl}" class="button">Réinitialiser le mot de passe</a>
            <p class="footer">Si vous n'avez pas demandé cette réinitialisation, vous pouvez ignorer cet e-mail.</p>
          </div>
        </body>
        </html>
      `,
    };
  };
  

  export default forgotPasswordTemplate