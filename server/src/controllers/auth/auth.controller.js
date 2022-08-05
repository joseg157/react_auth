const { validateUserUsername, validateUserPassword, createAccessToken, createRefreshToken, saveRefreshToken } = require('../../services/auth')


const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required' });
    const foundUser = validateUserUsername(user)
    if (!foundUser) return res.sendStatus(401) // Unauthorized

    // evaluate password
    const match = await validateUserPassword(pwd, foundUser.password)

    if (match) {
        const roles = Object.values(foundUser.roles)
        // create JWT LATER
        const accessToken = createAccessToken(foundUser.username, roles)

        const refreshToken = createRefreshToken(foundUser.username)

        // saving refresh token with current user
        await saveRefreshToken(foundUser, refreshToken);

        // ? Note store access token IN memory for front end user
        // httpOnly is not available on javacsript
        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 }); // units in milliseconds

        res.json({ accessToken })
    }
    else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };