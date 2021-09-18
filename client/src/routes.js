import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/Sign Up/SignUp';
import Recovery from './components/Authentication/Recovery/Recovery';
import Home from './components/Posts/Home';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/sign-up" component={SignUp}></Route>
                <Route path="/recover-password" component={Recovery}></Route>
                {/* <Route exact path="/" component={Home}></Route> */}
            </Switch>
        </Router>
    );
};

export default Routes;
