import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';
import useStyles from './styles';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/Sign Up/SignUp';
import Recovery from './components/Authentication/Recovery/Recovery';

function App() {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.body}>
                <Switch>
                    <Route exact path="/">
                        {/* {!user ? 
						<Login user={user}/> :
						<Posts />}	 */}
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
