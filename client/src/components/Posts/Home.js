import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import Header from './Header/Header';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
} from '@material-ui/core';

const Home = () => {
    const styles = useStyles();

    return (
        <div className="container">
            <Header />
        </div>
    );
};

export default Home;
