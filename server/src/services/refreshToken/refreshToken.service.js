const usersDB = {
    users: require('../../models/fakeDB/users.json'),
    setUsers: function (data) { this.users = data }
}

const validateUserRefreshToken = (refreshToken) => {
    return usersDB.users.find(person => person.refreshToken === refreshToken)
}

module.exports = { validateUserRefreshToken }