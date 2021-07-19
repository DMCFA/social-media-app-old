import React from 'react'

import useStyles from './styles'
import Login from './components/Authentication/Login'

function App() {
	const classes = useStyles()

	return (
		<div className={classes.body}>
			<Login />
		</div>
	)
}

export default App
