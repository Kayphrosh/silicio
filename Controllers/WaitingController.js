const Waiting  = require('../Model/WaitingModel')
const News  = require('../Model/NewsModel')

// show list of Waiting users
const index = (req, res, next) => {
    Waiting.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(er => {
        res.json({
            message: "Error fetching users"
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