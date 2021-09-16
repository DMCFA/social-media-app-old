import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/Sign Up/SignUp';
import Recovery from './components/Authentication/Recovery/Recovery';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login}>
                    {/* {!user ? 
                    <Login user={user}/> :
                    <Posts />}	 */}
                </Route>
                <Route path="/signup" component={SignUp}></Route>
            </Switch>
        </Router>
    );
};

export default Routes;
