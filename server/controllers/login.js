import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import User from '../models/user.js'

const login = async (req, res) => {
    const body = req.body

    const user = await User.findOne({
        username: body.username
    })

    const passwordMatch = user === null ? false : await bcrypt.compare(body.password, user.passwordHash)

    if (!(user && passwordMatch)) {
        return res.status(401).json({
            error: 'invalid username or password'
        })
    }

    const userToken = {
        username: user.username,
        id: user._id
    }

    const token = jwt.sign(userToken, process.env.SECRET)

    res
        .status(200)
        .send({
            token,
            username: user.username,
        })
}

function logout() {
    return console.log('in progress');
}

export {
    login,
    logout
}