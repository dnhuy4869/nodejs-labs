const express = require('express');
const userController = require('../controllers/user');
const { checkInput } = require('../middleware/checkInput');
const router = express.Router();

router.post('/register', userController.createUser);

router.post('/login', userController.login);

router.get("/private", checkInput, (req, res) => {
    return res.status(200).json({});
})

module.exports = router;