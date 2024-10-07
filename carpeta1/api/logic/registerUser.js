const { User } = require('../data')
const { validateEmail, validatePassword, validateName, validateSurname } = require('./helpers/validators')

function registerUser(name, surname, email, password) {
    validateName(name)
    validate (surname)
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email })
        .then(user => {
            if (user) throw new Error('User already exists')

            return User.create({ name, surname, email, password })
        })
        .then(() => { })
}
module.exports = registerUser