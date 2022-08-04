const usersDB = {
    users: require('../../models/fakeDB/users.json'),
    setUsers: function (data) { this.users = data }
}

const bcrypt = require('bcrypt');

const validateUserUsername = (user) => {
    return usersDB.users.find(person => person.username === user)
}

const validateUserPassword = async (pwd, databasePassword) => {
    return await bcrypt.compare(pwd, databasePassword)
}

module.exports = { validateUserUsername, validateUserPassword }