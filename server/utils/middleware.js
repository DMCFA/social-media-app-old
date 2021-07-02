/* eslint-disable no-undef */

export const requestLogger = (req, res, next) => {
	console.log('Method:', request.method)
	console.log('Path:  ', request.path)
	console.log('Body:  ', request.body)
	console.log('---')
	next()
}

export const unknownEndpoint = (req, res) => {
	res.status(404).send({ error: 'unknown endpoint' })
}
