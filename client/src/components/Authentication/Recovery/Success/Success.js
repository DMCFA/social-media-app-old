import React from 'react';

import useStyles from './styles';

const Success = ({ email }) => {
    const classes = useStyles();

    return (
        <div className={classes.notification}>
            <h2 className={classes.successText}>
                We sent an email to {email}{' '}
            </h2>
        </div>
    );
};

export default Success;
