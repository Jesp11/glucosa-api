const { User } = require('../models/index');
const BaseRepository = require('./base.repository')
const bcrypt = require('bcrypt');

class UserRepository extends BaseRepository {
    constructor() {
        super(User)
    }

    async findByEmail(email, transaction = null) {
        return this.findOne({ email }, transaction);
    }

    async comparePassword(inputPassword, storedPassword) {
        return bcrypt.compare(inputPassword, storedPassword);
    }

    async hashPassword(password) {
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds);
    }

}

module.exports = new UserRepository()