const express = require('express');
const { SignupController } = require('../controllers/authController');
const app = express();
const router = express.Router();


router.post("/api/signup",SignupController)


module.exports = router;