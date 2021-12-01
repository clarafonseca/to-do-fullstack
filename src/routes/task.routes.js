const { taskController } = require('../controllers')

const router = require('express').Router()

router.post('/', taskController.create)
router.get('/:id', taskController.read)
router.put('/', taskController.update)
router.delete('/', taskController.delete)

module.exports.task = router
