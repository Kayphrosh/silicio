const Waiting  = require('../Model/WaitingModel')
const News  = require('../Model/NewsModel')
const nodemailer = require('nodemailer');
const { OutgoingMessage } = require('http');
const validator = require("email-validator");
const fs = require('fs')
const Buffer = require('buffer')


// show list of Waiting users
const index = (req, res, next) => {
    Waiting.find()
    .then(response => {
        // res.json({
        //     response
        // })

        // var transporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     auth: {
        //         user: 'thesilicio@gmail.com',
        //         pass: '53242557'
        //     }
        // });
        var phones = []
        
        response.map(resp => {
           phones.push(resp.phone)
            // var valid = validator.validate(resp.email); 
            // console.log(valid, resp.email);

            // if(valid){
            //     var mailOptions = {
            //         from: 'thesilicio@gmail.com',
            //         to: resp.email,
            //         subject: 'Silicio Boot Camp',
            //         html: `<h1> <strong>Silicio Boot Camp Is Here</strong> </h1> <br/> <p>Hello ${resp.name},</p> <p>We are glad to let you know that the Silicio boot camp is starting soon. The long awaited boot camp is here, time to learn some tech.</p> <p>Kindly create a user account on your dashboard (https://dashboard.thesilicio.com) which grants you access to pay for the course(s) of your choice.</p> <p>See you soon</p> <p>Kind regards..</p> <quote>~Stein(Silicio Team Lead)</quote>`
            //     };
        
            //     transporter.sendMail(mailOptions, function (error, info) {
            //         if (error) {
            //             console.log("Emailimg error: " + error);
            //         } else {
            //             console.log('Email sent: ' + info.response);
            //         }
            //     });
            // }
            
        })
        // const data = new Uint8Array(Buffer.from(`${phones}`));
        fs.writeFile('phones.txt', `${phones}`, (err) => {
            if (err) throw err;
console.log('The file has been saved!');
        })
        
    })
    .catch(err => {
        res.json({
            message: "Error fetching users "+ err
        })
    })
}

const add = (req, res, next) => {
    let user = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        course: req.body.course
    }
    console.log({req: req.body.name})
    let wait = new Waiting(user)
    wait.save()
    .then(response  => {
        res.redirect('https://thesilicio.com/success.html')
        res.json({
            message: "You've successfuly been added to the Silicio boot camp waitin list!!!"
        })
        
    })
    .catch(eror => {
        res.json({
            message: "Wait adding failed"
        })
    })
}

const news = (req, res, next) => {
    let user = {
        email: req.body.email,
        }
    let wait = new News(user)
    wait.save()
    .then(response  => {
        res.redirect('https://thesilicio.com/sign-up.html')
        res.json({
            message: "You've successfuly been added to the Silicio boot camp waitin list!!!"
        })
        
    })
    .catch(eror => {
        res.json({
            message: "News letter addedd adding failed"
        })
    })
}

module.exports = {
    index, add, news
}