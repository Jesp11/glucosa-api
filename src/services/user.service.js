const UserRepository = require('../repositories/user.repository')

class UserService {

    async createUser(data, transaction = null) {
        const existEmail = await UserRepository.validateUnique('email', data.email, null, transaction)
        if (existEmail) throw { message: 'Email already exists' }
        return UserRepository.create(data, transaction)
    }

    async listUsers(condition = {}, transaction = null) {
        return UserRepository.findAll(condition, transaction)
    }

    async getUserById(id, transaction = null) {
        const user = await UserRepository.findById(id, transaction)
        if (!user) throw { message: 'User not found' }
        return user
    }

}

module.exports = new UserService()