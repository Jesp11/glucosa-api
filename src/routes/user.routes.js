const express = require('express');
const userController = require('../controllers/user.controller');
const validate = require('../middlewares/validate');
const { loginSchema } = require('../schemas/users.schema');
const router = express.Router();

router.post('/login', validate(loginSchema), (req, res) => userController.login(req, res));
router.post('/register', (req, res) => userController.createUser(req, res));
router.get('/', (req, res) => userController.getUserList(req, res));


module.exports = router;
