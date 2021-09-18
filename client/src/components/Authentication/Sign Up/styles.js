import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
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
    input: {
        padding: '5px',
        marginBottom: '3px',
        textAlign: 'center',
    },
    button: {
        margin: '10px 0 20px 50px',
    },
    login: {
        color: '#035397',
        fontSize: '16px',
        fontWeight: '600',
    },
});

export default useStyles;
