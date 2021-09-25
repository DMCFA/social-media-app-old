import React from 'react';
import { AppBar, Typography, InputBase, Link } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import makeStyles from './styles';

const Header = () => {
    const classes = makeStyles();

    return (
        <AppBar className={classes.header} position="static">
            <Typography
                className={classes.headerTitle}
                variant="h2"
                align="left"
            >
                Travel Connect
            </Typography>
            <div className={classes.search}>
                <SearchIcon fontSize="large" />
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                className={classes.searchField}
                inputProps={{ 'aria-label': 'search' }}
            />
            <Link
                className={classes.explore}
                color="white"
                underline="hover"
                variant="button"
            >
                Explore
            </Link>
        </AppBar>
    );
};

export default Header;
