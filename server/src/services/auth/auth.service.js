require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

// temp usage (Use only for fake db: users.json)
const fsPromise = require('fs').promises
const path = require('path')

const usersDB = {
    users: require('../../models/fakeDB/users.json'),
    setUsers: function (data) { this.users = data }
}


const validateUserUsername = (user) => {
    return usersDB.users.find(person => person.username === user)
}

const validateUserPassword = async (pwd, databasePassword) => {
    return await bcrypt.compare(pwd, databasePassword)
}

const createAccessToken = (username) => {
    return jwt.sign(
        { "username": username },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '30s' } // ! Change duration (5 - 15 mins) for production usage
    );
}

const createRefreshToken = (username) => {
    return jwt.sign(
        { "username": username },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '1d' } // ! Change duration for production usage
    );
}

const saveRefreshToken = async (foundUser, refreshToken) => {
    const otherUsers = usersDB.users.filter(person => person.username !== foundUser.username)
    const currentUser = { ...foundUser, refreshToken };
    usersDB.setUsers([...otherUsers, currentUser])
    await fsPromise.writeFile(
        path.join(__dirname, '..', '..', 'models', 'fakeDB', 'users.json'),
        JSON.stringify(usersDB.users)
    )
}

module.exports = { createAccessToken, createRefreshToken, saveRefreshToken, validateUserUsername, validateUserPassword }