const express = require('express');

const taskController = require('./../controller/taskController');

const router = express.Router();

router.get('/', taskController.listTask);

module.exports = router;