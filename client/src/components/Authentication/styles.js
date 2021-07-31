import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    flex: {
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'center'
    },
    title: {
        color: '#035397',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        fontSize: '3rem',
        fontVariant: 'small-caps',
        fontWeight: '600',
        letterSpacing: '5px'
    },
    form: {
        marginTop: '2rem'
    },
    email: {
        padding: '5px',
        marginBottom: '3px',
        textAlign: "center"
    },
    password: {
        padding: '5px',
        marginBottom: '20px'
    },
    button: {
        alignItems: 'center',
        padding: '15px'
    }
}))