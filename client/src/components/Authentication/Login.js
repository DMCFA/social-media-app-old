import React, { useState } from 'react';
import Header from '../Posts/Header/Header';
import loginService from '../../services/login';
import store from '../../store';

import { Link, useHistory } from 'react-router-dom';

import useStyles from './styles';
import { TextField, Button, Typography } from '@material-ui/core';

const Login = () => {
    const history = useHistory();

    //styles
    const classes = useStyles();

    //username and password state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //validation
    const validateForm = () => username.length === 0 || password.length === 0;

    //handle login
    const handleLogin = (e) => {
        e.preventDefault();

        //user object
        const user = { username, password };

        // store.dispatch(loginService(user));
    };

    const SignUp = () => history.push('sign-up');

    return (
        <div>
            <Header />
            <div className={classes.flex}>
                <h2 className={classes.title}>Login to Travel Connect</h2>
                <div>
                    <form onSubmit={handleLogin}>
                        <div className={classes.form}>
                            <TextField
                                className={classes.username}
                                autoFocus
                                helperText="Your username goes here"
                                label="Username"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                className={classes.password}
                                autoComplete="off"
                                helperText="Your password goes here"
                                label="Password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className={classes.forget}>
                            <Typography>
                                <Link
                                    to="/recover-password"
                                    className={classes.link}
                                >
                                    Forgot my password
                                </Link>
                            </Typography>
                        </div>
                        <div>
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                disabled={validateForm()}
                                type="submit"
                                id="login"
                            >
                                Login
                            </Button>
                            <Button
                                onClick={SignUp}
                                className={classes.button}
                                variant="contained"
                                color="secondary"
                                type="submit"
                                id="signup"
                            >
                                Sign Up
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
