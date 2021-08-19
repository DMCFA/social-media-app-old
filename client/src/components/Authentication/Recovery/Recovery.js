import React, { useState } from 'react'
import Header from '../../Posts/Header/Header'

import useStyles from './styles'

import {
    TextField,
    Button
} from '@material-ui/core'

const Recovery = () => {

    const classes = useStyles()

    const [email, setEmail] = useState('')

    const handleSubmit = e => {
        setEmail({value: e.target.value})
        e.preventDefault()
    }
    
    return(
        <div className={classes.forget}>
            <Header />

            <div className={classes.flex}>
                <h3 className={classes.title}>Enter your email below</h3>

                <div>
                    <form onSubmit={handleSubmit}>
                        <div className={classes.form}>
                            <TextField
                                className={classes.email}
                                helperText='Your email goes here'
                                label='Email' id='email' value={email}
                                onChange={({ target }) => setEmail(target.value)}
                                />
                            <div>
                                <Button
                                    className={classes.button}
                                    variant='contained'
                                    color='primary'
                                    type='submit' id='recovery'>
                                    Recover Your Password
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Recovery