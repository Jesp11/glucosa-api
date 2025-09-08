const User = require('../models/user.model')
const BaseRepository = require('./base.repository')

class UserRepository extends BaseRepository {
    constructor() {
        super(User)
    }
}

module.exports = new UserRepository()