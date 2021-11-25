const nodemailer = require("nodemailer");

module.exports.SendEmail = async function (formulario) {
  console.log(formulario, "formulario");
  try {
    var transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
          user: '6fcb083a82df5d',
          pass: '9b12e1146a24d3'
      }
    });

    let info = await transporter.sendMail({
      from: "enbyronment.dev@gmail.com",
      to: 'enbyronment.dev@gmail.com', //'seleccion.personal@logicstudio.net', // Cambia esta parte por el destinatario
      subject: "asunto",
      html: `
    <strong>Nombre:</strong> ${formulario.nombre} <br/>
    <strong>Apellido:</strong> ${formulario.apellidos} <br/>
    <strong>Fecha de Nacimiento:</strong> ${formulario.fechaNacimiento}
    `,
    });

    console.log("enviando");
    console.log("Message send: %s", info);
    // Message send: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  
  } catch (error) {
    console.error(error);
  }
};
