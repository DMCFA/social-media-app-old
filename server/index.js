import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import { MONGODB_CONNECTION, PORT } from './utils/config.js'
import { requestLogger, unknownEndpoint } from './utils/middleware.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

mongoose.connect(MONGODB_CONNECTION, ({
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true
}))
	.then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
	.catch((error) => console.log(error.message))


app.use(requestLogger) // before routes
app.use(unknownEndpoint) // after routes

