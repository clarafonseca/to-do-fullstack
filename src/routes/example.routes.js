const { exampleController } = require('../controllers')

const router = require('express').Router()

router.get('/', exampleController.example)

module.exports.example = router
