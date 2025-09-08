const userService = require('../services/user.service');

class UserController {

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const data = await userService.authenticate(email, password);
            if (data) {
                res.status(200).json({
                    status: 200,
                    data
                });
            } else {
                res.status(401).json({
                    status: 401,
                    error: {
                        message: 'Invalid credentials'
                    }
                });
            }
        } catch (error) {
            res.status(500).json({
                status: 500,
                error: {
                    message: error.message
                }
            });
        }
    }

    async createUser(req, res) {
        try {
            const userData = req.body;
            const newUser = await userService.createUser(userData);
            res.status(201).json({
                status: 201,
                data: newUser
            });
        } catch (error) {
            res.status(500).json({
                status: 500,
                error: {
                    message: error.message
                }
            });
        }
    }

    async getUserList(req, res) {
        try {
            const users = await userService.listUsers();
            res.status(200).json({
                status: 200,
                data: users
            });
        } catch (error) {
            res.status(500).json({
                status: 500,
                error: {
                    message: error.message
                }
            });
        }
    }
}


module.exports = new UserController();