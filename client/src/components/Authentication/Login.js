import React, { useState } from 'react'
import Header from '../Posts/Header/Header'
import useStyles from './styles'
import {
  TextField,
  Button
} from '@material-ui/core'

const Login = () => {

  const classes = useStyles()
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = (e) => {
    setEmail({value: e.target.value})
    setPassword({value: e.target.value})
    e.preventDefault()
  }

  const handleChange = (e) => {
    setEmail({value: e.target.value})
    setPassword({value: e.target.value})
  }

  return(
    <div>
      <Header />
      <div className={classes.flex}>
        <h2 className={classes.title}>Login to Travel Connect</h2>
        <div>
        <form onSubmit={handleSubmit}>
          <div className={classes.form}>
            <TextField
              className={classes.email}
              autoFocus
              helperText='Your email goes here'
              label='Email' id='email' value={email}
              onChange={handleChange}
              />
          </div>
          <div>
            <TextField
              className={classes.password}
              autoComplete='off'
              helperText='Your password goes here'
              label='Password' id='password' value={password}
              onChange={handleChange}
            />
          </div>
          <div>
            <Button
              className={classes.button} 
              variant="contained" 
              color="primary" 
              type='submit' id='login'>
              Login
            </Button>
            <Button
              className={classes.button} 
              variant="contained" 
              color="secondary" 
              type='submit' id='signup'>
              Sign Up
            </Button>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Login