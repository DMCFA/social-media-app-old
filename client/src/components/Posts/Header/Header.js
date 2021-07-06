import React from 'react';
import {
  AppBar,
  Typography
} from '@material-ui/core'
import makeStyles from './styles'

const Header = () => {
  const classes = makeStyles()

  return (
      <AppBar className={classes.header} position='static'>
        <Typography variant='h2' align='left'>
          Travel Connect
        </Typography>
      </AppBar>
  )
}

export default Header