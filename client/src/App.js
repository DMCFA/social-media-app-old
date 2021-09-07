import React from 'react';
import './app.css';
import Routes from './routes';
import useStyles from './styles';

function App() {
    const classes = useStyles();

    return <Routes />;
}

export default App;
