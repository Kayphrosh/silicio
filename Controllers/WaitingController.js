const Waiting  = require('../Model/WaitingModel')

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
        res.json({
            message: "Wait added successfuly"
        })
    })
    .catch(eror => {
        res.json({
            message: "Wait adding failed"
        })
    })
}

module.exports = {
    index, add
}