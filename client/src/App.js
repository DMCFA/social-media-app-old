import React from 'react'
import { 
	BrowserRouter as Router,
	Route,
	Switch,
 } from 'react-router-dom'

import useStyles from './styles'
import Login from './components/Authentication/Login'
import Header from './components/Posts/Header/Header'

function App({ user }) {
	const classes = useStyles()

	return (
		<Router>
			<div className={classes.body}>
				<Switch>
					<Route exact path='/'>
						{!user ? 
						<Login user={user}/> :
						< Header />}	
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App
