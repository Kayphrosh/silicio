const mongoose = require("mongoose")
const Schema = mongoose.Schema

const newslist = new Schema({
    email: {
        type: String
    }
}, { timestamps: true })

const News = mongoose.model("NewsLists", newslist)
module.exports  = News