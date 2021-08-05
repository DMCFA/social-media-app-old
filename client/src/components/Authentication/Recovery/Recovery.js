import React from 'react'

import useStyles from './styles'

const Recovery = () => {

    const classes = useStyles()
    
    return(
        <div className={classes.forget}>
        <p>Forgot my password</p>
        </div>
    )
}

export default Recovery