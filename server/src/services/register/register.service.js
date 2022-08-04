const usersDB = {
    users: require('../../models/fakeDB/users.json'),
    setUsers: function (data) { this.users = data }
}

const fsPromise = require('fs').promises
const path = require('path')
const bcrypt = require('bcrypt')

// check if user exists
const checkDuplicateUser = (user) => {
    return usersDB.users.find(person => person.username === user);
}

// add user to "database"
const addUser = async (user, pwd) => {
    // encrypt the password
    const hashedPwd = await bcrypt.hash(pwd, 10);
    // store new users
    const newUser = { "username": user, "password": hashedPwd }
    usersDB.setUsers([...usersDB.users, newUser])
    await fsPromise.writeFile(
        path.join(__dirname, '..', '..', 'models', 'fakeDB', 'users.json'),
        JSON.stringify(usersDB.users)
    );
    console.log(usersDB.users)
}

module.exports = { checkDuplicateUser, addUser }