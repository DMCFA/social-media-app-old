import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import { MONGODB_CONNECTION, PORT } from './utils/config.js'
import { requestLogger, unknownEndpoint, errorHandler } from './utils/middleware.js'
import { infoMessage, errorMessage } from './utils/logger.js'

import usersRouter from './routes/users.js'

const app = express()

// app.use(express.static('build'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

mongoose.connect(MONGODB_CONNECTION, ({
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
}))
    .then(() => app.listen(PORT, () => infoMessage(`server running on port: ${PORT}`)))
    .catch((error) => errorMessage(error.message))


app.use(requestLogger) // before routes

app.use('/users', usersRouter)

app.use(unknownEndpoint) // after routes
app.use(errorHandler) // after routes

export default app