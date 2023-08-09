const express = require("express")
const app= express()

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sundarasekar01@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'sundarasekar01@gmail.com',
  to: 'sundarasekar2308@gmail.com',
  subject: 'Node-mailer',
  text: 'Its working perfectly'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});








app.listen(2000,()=>{
    console.log("connected to 2000")
})