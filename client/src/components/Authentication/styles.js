import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    flex: {
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'center',
    },
    title: {
        color: '#035397',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        fontSize: '3rem',
        fontVariant: 'small-caps',
        fontWeight: '600',
        letterSpacing: '5px',
        paddingTop: '15px',
    },
    form: {
        marginTop: '2rem',
    },
    username: {
        padding: '5px',
        marginBottom: '3px',
        textAlign: 'center',
    },
    password: {
        padding: '5px',
        marginBottom: '20px',
    },
    button: {
        alignItems: 'center',
        padding: '15px',
        margin: '10px',
    },
    forget: {
        textAlign: 'center',
        marginBottom: '10px',
        padding: '5px 10px',
        backgroundColor: '#035397',
        border: '3px solid #035397',
        borderRadius: '5px',
    },
    link: {
        outline: 'none',
        textDecoration: 'none',
        color: 'white',
        fontSize: '14px',
        textTransform: 'uppercase',
    },
}));
