const router = require('express').Router();

const { taskListController } = require('../controllers');

router.post('/', taskListController.create);
router.get('/', taskListController.list);
router.get('/:id', taskListController.read);
router.put('/:id', taskListController.update);
router.delete('/:id', taskListController.delete);

module.exports.taskList = router;
