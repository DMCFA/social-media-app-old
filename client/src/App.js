import React from 'react'
import { 
	BrowserRouter as Router,
	Route,
	Switch,
 } from 'react-router-dom'

import useStyles from './styles'
import Login from './components/Authentication/Login'
import SignUp from './components/Authentication/Sign Up/SignUp'
import Recovery from './components/Authentication/Recovery/Recovery'
import Success from './components/Posts/Notification/Success/Success'
import Posts from './components/Posts/Posts'

function App({ user, email }) {
	const classes = useStyles()

	return (
		<Router>
			<div className={classes.body}>
				<Switch>
					<Route exact path='/'>
						{/* {!user ? 
						<Login user={user}/> :
						<Posts />}	 */}
						<Login />
					</Route>
					<Route path='/recovery'>
						<Recovery />
					</Route>
					<Route path='/signup'>
						<SignUp />
					</Route>
					<Route>
						<Success email={email}/>
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App
