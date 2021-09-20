const express = require('express')
const router = express.Router()

const WaitingController = require('../Controllers/WaitingController')

router.post('/waitings', WaitingController.index)
router.post('/waitings/add', WaitingController.add)

module.exports = router