const express = require('express')
const path  = require('path')
const bodyParser = require('body-parser')
const { urlencoded, json } = require('body-parser')
const WaitingRoute  = require('./Routes/WaitingRoute')
const mongoose  = require("mongoose")
const dotenv = require('dotenv')
dotenv.config()
mongoose.connect('mongodb+srv://John:John4444@cluster0.q2hsb.mongodb.net/Silicio?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', (err) => {
    console.log({ MongoErr: err} )
})

db.once('open', () => {
    console.log('Database Connection Established')
})

const port = process.env.PORT || 7000
const app = express()
app.use('/public',express.static(path.join(__dirname, 'static')))
app.set('view engine', 'ejs')
app.use(urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(json())

app.get("/", (req, res) => {
    res.render('index');
});

app.use('/', WaitingRoute)
app.listen(port, (err) => {
    console.log('Server started on port', port)
})