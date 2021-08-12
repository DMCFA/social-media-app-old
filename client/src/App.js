import React from 'react'
import { 
	BrowserRouter as Router,
	Route,
	Switch,
 } from 'react-router-dom'

import useStyles from './styles'
import Login from './components/Authentication/Login'
import Recovery from './components/Authentication/Recovery/Recovery'
import Posts from './components/Posts/Posts'

function App({ user }) {
	const classes = useStyles()

	return (
		<Router>
			<div className={classes.body}>
				<Switch>
					<Route exact path='/'>
						{!user ? 
						<Login user={user}/> :
						<Posts />}	
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
