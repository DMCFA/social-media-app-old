import React, { useState } from 'react';
import Header from '../../Posts/Header/Header';
import store from '../../../store';

import { useHistory } from 'react-router-dom';

import useStyles from './styles';
import { TextField, Button, Link } from '@material-ui/core';
import Login from '../Login';

const SignUp = () => {
    const classes = useStyles();

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    // const [country, setCountry] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    //validation
    const validateForm = () => {
        return (
            email.length === 0 ||
            username.length <= 3 ||
            password.length === 0 ||
            confirmPassword.length === 0
        );
    };

    //sign up

    const handleSubmit = (e) => {
        e.preventDefault();

        //password match
        if (password !== confirmPassword) {
            //error
        }

        //create new user
        const newUser = {
            username,
            email,
            password,
        };

        // store.dispatch(register(newUser))
    };

    return (
        <div>
            <Header />
            <div className={classes.flex}>
                <h2 className={classes.title}>Welcome to Travel Connect</h2>
                <div>
                    <form onSubmit={handleSubmit}>
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
                        <div className={classes.form}>
                            <TextField
                                className={classes.email}
                                autoFocus
                                helperText="Your email goes here"
                                label="Email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                        <div>
                            <TextField
                                className={classes.password}
                                autoComplete="off"
                                helperText="Your password goes here"
                                label="Confirm Password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                disabled={validateForm()}
                                type="submit"
                                id="signUp"
                            >
                                Sign Up
                            </Button>
                        </div>
                    </form>
                    <Link
                        href="login"
                        className={classes.login}
                        underline="hover"
                    >
                        Already have an account?
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
