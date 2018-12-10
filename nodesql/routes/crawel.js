const express = require('express')
const router = express.Router()
const crawelController = require('../controllers').crawel

router.get('/list', function (req, res, next) {
    crawelController.list(req, res)
})
router.get('/fetch', function (req, res, next) {
    crawelController.create(req, res)
    
})

module.exports = router