import React from 'react'
import { 
	BrowserRouter as Router,
	Route,
	Switch,
 } from 'react-router-dom'

import useStyles from './styles'
import Login from './components/Authentication/Login'
import Recovery from './components/Authentication/Recovery/Recovery'

function App() {
	const classes = useStyles()

	return (
		<Router>
			<div className={classes.body}>
				<Switch>
					<Route exact path='/'>
					<Login />
					</Route>
					<Route path='/recovery'>
						<Recovery />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App
