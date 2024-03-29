require ("../settings");
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const mailer = {
  inboxGmailRegist: (email, otp) => {
    try {
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          // ENV
          user: your_email,
          pass: email_password,
        },
      });
      let mailOptions = {
        from: '"Shefin" <no-reply@gmail.com>',
        to: email,
        subject: `Verify Email - Api Shefin`,
        html: `Your OTP is: ${otp}`,
      };
      transporter.sendMail(mailOptions, (err) => {
        if (err) {
          console.log(err);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
};
module.exports = mailer;
