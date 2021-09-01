import React, { useState } from 'react'
import Header from '../../Posts/Header/Header'
import Success from './Success/Success'

import useStyles from './styles'

import {
    TextField,
    Button
} from '@material-ui/core'
import { Link, Redirect, Switch, useHistory, Route } from 'react-router-dom'


const Recovery = () => {

    const classes = useStyles()

    const history = useHistory()

    const [email, setEmail] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)

    const handleSubmit = (e) => {
        setEmail(e.target.email.value);
        setShowSuccess(true)
    }


    return (
        <div className={classes.forget}>
            <Header />
            <div className={classes.flex}>
                {showSuccess ? (
                    <Success email={email} />
                ) : (
                    <div>
                        <h3 className={classes.title}>
                            Enter your email below
                        </h3>
                        <div className={classes.form}>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <TextField
                                        className={classes.email}
                                        helperText="Your email goes here"
                                        id="email"
                                        value={email}
                                        onChange={({ target }) =>
                                            setEmail(target.value)
                                        }
                                    />
                                    <div>
                                        <Button
                                            className={classes.button}
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            id="recovery"
                                        >
                                            Recover Your Password
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>{' '}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Recovery