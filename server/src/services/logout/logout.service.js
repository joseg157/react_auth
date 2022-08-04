const fsPromise = require('fs').promises
const path = require('path')

const usersDB = {
    users: require('../../models/fakeDB/users.json'),
    setUsers: function (data) { this.users = data }
}

const validateUserRefreshToken = (refreshToken) => {
    return usersDB.users.find(person => person.refreshToken === refreshToken)
}

const deleteUserRefreshToken = async (refreshToken) => {
    const otherUsers = usersDB.users.filter(person => person.refreshToken !== refreshToken);
    const currentUser = { ...foundUser, refreshToken: '' }
    usersDB.setUsers([...otherUsers, currentUser])

    await fsPromise.writeFile(
        path.join(__dirname, '..', '..', 'models', 'fakeDB', 'users.json'),
        JSON.stringify(usersDB.users)
    )
}

module.exports = { deleteUserRefreshToken, validateUserRefreshToken }