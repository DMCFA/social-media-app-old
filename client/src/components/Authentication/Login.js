import React, { useState } from 'react'
import Header from '../Posts/Header/Header'
import loginService from '../../services/login'

import {
  Link
} from "react-router-dom";

import useStyles from './styles'
import {
  TextField,
  Button,
  Typography,
} from '@material-ui/core'


const Login = () => {

  const classes = useStyles()
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const user = await loginService.login({
        username, password
      })
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (e) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
    }
  }


  const handleSubmit = (e) => {
    setUsername({value: e.target.value})
    setPassword({value: e.target.value})
    e.preventDefault()
  }

  const handleChange = (e) => {
    setUsername({value: e.target.value})
    setPassword({value: e.target.value})
  }

  return(
      <div>
        <Header />
        <div className={classes.flex}>
          <h2 className={classes.title}>Login to Travel Connect</h2>
          <div>
          <form onSubmit={handleLogin}>
            <div className={classes.form}>
              <TextField
                className={classes.username}
                autoFocus
                helperText='Your username goes here'
                label='Username' id='username' value={username}
                onChange={({ target }) => setUsername(target.value)}
                />
            </div>
            <div>
              <TextField
                className={classes.password}
                autoComplete='off'
                helperText='Your password goes here'
                label='Password' id='password' value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
            </div>
            <div className={classes.forget}>
              <Typography>
                <Link to='/recovery' className={classes.link}>Forgot my password</Link>
              </Typography>
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