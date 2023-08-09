const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine','ejs')





var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sundarasekar01@gmail.com',
    pass: 'byopnoxulklfskuz'
  }
});

app.get('/', (req, res) => {
    const message = req.query.message;
  res.render("../index",{message})

});

app.post('/send-email', (req, res) => {
  const { to, subject, message } = req.body;

  var mailOptions = {
    from: 'sundarasekar01@gmail.com',
    to: to,
    subject: subject,
    text: message
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
        res.redirect('/?message=Error sending email');
      } else {
        console.log('Email sent: ' + info.response);
        res.redirect('/?message=Email sent successfully'); 
      }
  });
});

app.listen(3000, () => {
  console.log("connected to 3000"); 
});

