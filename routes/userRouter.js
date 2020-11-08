const express = require('express');

const viewController = require('./../controllers/viewController');
const auth = require('./../controllers/authController');

const router = express.Router();

// Middleware :
// router.use(auth.isLogin);


module.exports = router;