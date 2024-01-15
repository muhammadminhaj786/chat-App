const express = require('express');
const { registerUser, allUsers } = require('../controllers/authController');
const app = express();
const router = express.Router();


router.post("/api/signup",registerUser)
router.get("/api/getalluser",allUsers)



module.exports = router;