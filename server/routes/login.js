import express from 'express'

import {
    login,
    logout
} from '../controllers/login.js'

const loginRouter = express.Router()

loginRouter.post('/login', login)
loginRouter.post('/logout', logout)

export default loginRouter