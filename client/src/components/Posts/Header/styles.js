import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    header: {
        backgroundColor: '#FFB085',
        borderRadius: '20',
        margin: '4.15 vh',
        display: 'flex',
        flexDirection: 'row',
        padding: '0.5rem',
        fontVariant: 'small-caps',
    },
    search: {
        paddingInline: '25px',
        marginTop: '25px',
    },
    searchField: {
        marginTop: '15px',
    },
    explore: {
        fontWeight: '600',
        cursor: 'pointer',
        fontSize: '18px',
        letterSpacing: '1px',
        marginBlockStart: '28px',
    },
}));
