const mongoose = require("mongoose")
const Schema = mongoose.Schema

const waitingList = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    course: {
        type: String
    },
}, { timestamps: true })

const Waiting = mongoose.model("WaitingList", waitingList)
module.exports  = Waiting