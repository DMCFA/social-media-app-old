import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    forget: {
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
        letterSpacing: '5px',
        padding: '10px',
    },
    form: {
        marginTop: '2rem',
        textAlign: 'center'
    },
    email: {
        padding: '5px',
        marginBottom: '3px',
        textAlign: "center"
    },
}))