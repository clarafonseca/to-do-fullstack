const router = require('express').Router();

const { taskController } = require('../controllers');

router.post('/', taskController.create);
router.get('/:id', taskController.read);
router.put('/:id', taskController.update);
router.delete('/:id', taskController.delete);

module.exports.task = router;
