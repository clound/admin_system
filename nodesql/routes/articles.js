const express = require('express')
const router = express.Router()
var topicController = require('../controllers').articles

router.get('/getlist', (req, res, next) => {
    topicController.list(req, res)
    // next()
})
router.post('/create', (req, res, next) => {
    topicController.create(req, res)
    // next()
})

module.exports = router