import React from 'react';
import {
  AppBar,
  Typography
} from '@material-ui/core'

const Header = () => {

  return (
      <AppBar color='inherit' position='static'>
        <Typography variant='h2' align='left'>
          Travel Connect
        </Typography>
      </AppBar>
  )
}

export default Header