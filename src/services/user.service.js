const UserRepository = require('../repositories/user.repository')
const jwt = require('../utils/jwt')

class UserService {

    async authenticate(email, password, transaction = null) {
        const user = await UserRepository.findByEmail(email, transaction)
        if (!user) throw { message: 'User not found' }
        const comparePassword = await UserRepository.comparePassword(password, user.password)
        if (!comparePassword) throw { message: 'Invalid password' }
        const generatedToken = jwt.generateToken({ id: user.id, email: user.email })
        if (!generatedToken) throw { message: 'Error generating token' }
        return { user, token: generatedToken }
    }

    async createUser(data, transaction = null) {
        const existEmail = await UserRepository.validateUnique('email', data.email, null, transaction)
        if (!existEmail) throw { message: 'Email already exists' }
        const hashedPassword = await UserRepository.hashPassword(data.password)
        data.password = hashedPassword
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