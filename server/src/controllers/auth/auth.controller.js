const usersDB = {
    users: require('../../models/fakeDB/users.json'),
    setUsers: function (data) { this.users = data }
}
const { validateUserUsername, validateUserPassword } = require('../../services/auth')

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required' });
    const foundUser = validateUserUsername(user)
    if (!foundUser) return res.sendStatus(401) // Unauthorized

    // evaluate password
    const match = await validateUserPassword(pwd, foundUser.password)

    if (match) {
        // create JWT LATER
        res.json({ 'sucess': `User ${user} is logged in!` })
    }
    else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };