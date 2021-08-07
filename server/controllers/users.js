import bcrypt from 'bcrypt'

import User from '../models/user.js'

const createUser = async (req, res) => {
    const body = req.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.passwordHash, saltRounds)

    const user = new User({
        username: body.username,
        passwordHash,
    })

    const savedUser = await user.save()

    res.json(savedUser)
}

export {
    createUser
}