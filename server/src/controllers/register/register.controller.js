const usersDB = {
    users: require('../../models/fakeDB/users.json'),
    setUsers: function (data) { this.users = data }
}

const { addUser, checkDuplicateUser } = require('../../services/register')

const handleNewUser = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required' });
    // check for duplicate username in the db
    const duplicate = checkDuplicateUser(user);
    if (duplicate) return res.sendStatus(409) // Conflict

    try {
        await addUser(user, pwd)
        res.status(201).json({ 'sucess': `New user ${user} created!` })
    }
    catch (err) {
        res.status(500).json({ 'message': err.message })
    }
}

module.exports = { handleNewUser }