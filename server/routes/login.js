import express from 'express'

import {
    login,
    logout
} from '../controllers/login.js'

const loginRouter = express.Router()

loginRouter.post('/', login)
loginRouter.post('/', logout)

export default loginRouter