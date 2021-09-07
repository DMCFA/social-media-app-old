import React, { useState } from 'react';
import Header from '../Posts/Header/Header';
import Notification from '../Posts/Notification/Notification';
import loginService from '../../services/login';

import { Link, useHistory } from 'react-router-dom';

import useStyles from './styles';
import { TextField, Button, Typography } from '@material-ui/core';

const Login = () => {
    const history = useHistory();

    const classes = useStyles();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const handleLogin = (e) => {
        e.preventDefault();

        //user object
        const user = { username, password };
    };

    const signUp = () => {
        let path = '/signup';
        history.push(path);
    };

    return (
        <div>
            <Header />

            <Notification message={errorMessage} />

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
                                <Link to="/recovery" className={classes.link}>
                                    Forgot my password
                                </Link>
                            </Typography>
                        </div>
                        <div>
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                type="submit"
                                id="login"
                            >
                                Login
                            </Button>
                            <Button
                                onClick={signUp}
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
