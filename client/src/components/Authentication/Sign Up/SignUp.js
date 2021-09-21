import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';

import Header from '../../Posts/Header/Header';
import store from '../../../store';
import { userSelector } from '../../../reducers/UserSlice';

import useStyles from './styles';
import { TextField, Button, Link, Typography } from '@material-ui/core';

const SignUp = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();

    const notify = () => toast();

    const { isFetching, isSuccess, isError, errorMessage } =
        useSelector(userSelector);

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
            toast.error(errorMessage);
        }

        //create new user
        const newUser = {
            username,
            email,
            password,
        };

        store.dispatch(register(newUser));
    };

    useEffect(() => {
        return () => {
            dispatch(clearState());
        };
    }, []);

    useEffect(() => {
        if (isSuccess) {
            dispatch(clearState());
            history.push('/');
        }

        if (isError) {
            toast.error(errorMessage);
            dispatch(clearState());
        }
    }, [isSuccess, isError]);

    return (
        <div>
            <Header />
            <div className={classes.flex}>
                <h2 className={classes.title}>Welcome to Travel Connect</h2>
                <div>
                    <form onSubmit={handleSubmit} method="POST">
                        <div className={classes.form}>
                            <TextField
                                className={classes.input}
                                autoFocus
                                helperText="Choose your username"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                className={classes.input}
                                autoFocus
                                helperText="Type your email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                className={classes.input}
                                autoComplete="off"
                                helperText="Choose your password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                className={classes.input}
                                autoComplete="off"
                                helperText="Confirm your password"
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
                    <Typography>
                        <Link
                            href="login"
                            className={classes.login}
                            underline="hover"
                        >
                            Already have an account?
                        </Link>
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
