import React from 'react'

import useStyles from './styles'

const Success = ({email}) => {

    const classes = useStyles()

    return(
        <div className={classes.notification}>
            <h2>A recovery link was sent to {email}</h2>
        </div>
    )
}

export default Success