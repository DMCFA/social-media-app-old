import React, { useEffect } from "react"
// import { useDispatch } from 'react-redux'
import { useForm, useController, useFieldArray } from "react-hook-form"
//import login reducer

import useStyles from './styles'

export default function Login() {
    const classes = useStyles()

    const {
      register,
      formState: { errors },
      handleSubmit
    } = useForm({
      mode: "onChange"
    });
    const onSubmit = (data) => {
      console.log((JSON.stringify(data)))
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input
          placeholder="Your email goes here"
          {...register("email", {
            required: "An email is required",
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email address"
            }
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
  
        <label htmlFor="password">Password</label>
        <input
          placeholder="Your password goes here"
          {...register("password", {
            required: "A password is required",
            minLength: {
              value: 5,
              message: "Password needs to have a minimum of 5 characters"
            }
          })}
        />
        {errors.password && <p>{errors.lastName.message}</p>}
        <input type="submit" />
      </form>
    );
  }

//connect to redux