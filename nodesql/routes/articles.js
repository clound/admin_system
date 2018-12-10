const express = require('express')
const router = express.Router()
const topicController = require('../controllers').articles
const checkToken = require('../middlewares/check_api_token')
router.get('/getlist', checkToken, (req, res, next) => {
    topicController.list(req, res)
    // next()
})
router.post('/create', checkToken, (req, res, next) => {
    topicController.create(req, res)
    // next()
})
router.post('/delete', checkToken, (req, res, next) => {
    topicController.delete(req, res)
    // next()
})
router.post('/update', checkToken, (req, res, next) => {
    topicController.update(req, res)
    // next()
})

module.exports = router