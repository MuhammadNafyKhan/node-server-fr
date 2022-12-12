var nodemailer = require("nodemailer");

exports.sendEmail = async (mailOptions) => {
  try {
    var transporter = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "1602010@namal.edu.pk",
        pass: "oflxtqfrolezrftf",
      },
    });
    let send = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + send.response);
    return true;
  } catch (e) {
    throw e;
  }
};
