const { validateUserRefreshToken } = require('../../services/refreshToken')

const jwt = require('jsonwebtoken')
require('dotenv').config()


const handleRefreshToken = (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);

    const refreshToken = cookies.jwt
    // Check user refresh tokens exist

    const foundUser = validateUserRefreshToken(refreshToken)
    if (!foundUser) return res.sendStatus(403) // Unauthorized

    // evaluate jwt
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decode) => {
            if (err || foundUser.username !== decode.username) return res.sendStatus(403)
            const accessToken = jwt.sign(
                { "username": decode.username },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '30s' } // ! Change duration (5 - 15 mins) for production usage
            );
            res.json({ accessToken })
        }
    );
}

module.exports = { handleRefreshToken }