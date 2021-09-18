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

    const post = useSelector((store) => store.posts);

    return (
        <div className="container">
            <Header />
            <div className="post">
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Link to={`posts/${post.id}`}>
                                        <i>{post.title}</i>
                                        <i>{post.author}</i>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default Home;
