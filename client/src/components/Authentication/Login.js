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
      <div>
        <h2 className={classes.title}>Login to Travel Connect</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              label='email' id='email' value={email}
              onChange={handleChange}
              />
              <div>
                <TextField
                  label='password' id='password' value={password}
                  onChange={handleChange}
                  />
              </div>
              <Button variant="contained" color="primary" type='submit' id='login'>Login</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login