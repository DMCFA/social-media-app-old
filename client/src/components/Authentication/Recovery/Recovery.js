import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Header from '../../Posts/Header/Header'

import useStyles from './styles'

import {
    Typography,
    TextField,
    Button
} from '@material-ui/core'

const Recovery = () => {

    const classes = useStyles()

    const [email, setEmail] = useState('')

    const handleSubmit = e => {
        setEmail({value: e.target.value})
    }
    
    return(
        <div className={classes.forget}>
            <Header />

            <div className={classes.flex}>
                <h3 className={classes.title}>Enter your email below</h3>

                <div className={classes.form}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <TextField
                                className={classes.email}
                                helperText='Your email goes here'
                                id='email' value={email}
                                onChange={({ target }) => setEmail(target.value)}
                                />
                            <div>
                                <Link to='Posts/Notification/Success' email={email}>
                                    <Button
                                        className={classes.button}
                                        variant='contained'
                                        color='primary'
                                        type='submit' id='recovery'>   
                                        Recover Your Password
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Recovery