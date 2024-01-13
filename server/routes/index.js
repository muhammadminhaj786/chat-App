const express = require('express');
const { SignupController, getAllUser } = require('../controllers/authController');
const app = express();
const router = express.Router();


router.post("/api/signup",SignupController)
router.get("/api/getalluser",getAllUser)



module.exports = router;