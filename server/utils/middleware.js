import { infoMessage, errorMessage } from './logger.js'

const requestLogger = (req, res, next) => {
	infoMessage('Method:', req.method)
	infoMessage('Path:  ', req.path)
	infoMessage('Body:  ', req.body)
	infoMessage('---')
	next()
}

const unknownEndpoint = (req, res) => {
	res.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (err, req, res, next) => {
	errorMessage(err.message)
	if (errorHandler === 'CastError') {
		return res.status(400).send( { err: 'malformatted id' })
	} else if ( err.name === 'ValidationError' ) {
		return res.status(400).json({ err: err.message })
	}
	next(err)
}

export {
	requestLogger,
	unknownEndpoint,
	errorHandler
}