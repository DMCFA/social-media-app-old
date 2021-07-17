import React from 'react'
import { Formik, Form, Field, useField } from 'formik'
import * as yup from 'yup'
import {
	TextField,
    Button
} from '@material-ui/core'

import useStyles from './styles'

const CustomTextField = props => {
    const [field, meta] = useField({ placeholder, ...props })
    const errorText = meta.error && meta.touched ? meta.error : ''
    return <TextField placeholder={placeholder} {...field} helperText={errorText} />
}

export default function Login() {

    const classes = useStyles()

	return (
		<div className={classes.body}>
			<h1>Travel Connect</h1>
			<Formik initialValues={{
				email: '',
				password: ''
			}} onSubmit={(data, {setSubmitting, resetForm}) => {
                setSubmitting(true)
                //async
                setSubmitting(false)
			}}>
				{({ values, isSubmitting }) => (
					<Form>
                        <div>
                            <CustomTextField placeholder='Email' name='email' type='input' as={TextField}/>
                        </div>
                        <div>
                            <CustomTextField placeholder='Password' name='password' type='input' as={TextField}/>
                        </div>
                        <div className={classes.bnt}>
                            <Button disabled={isSubmitting} type='submit'>Submit</Button>
                            <Button disabled={isSubmitting} type='submit'>Sign Up</Button>
                            <Button disabled={isSubmitting} type='submit'>Forgot Password</Button>
                        </div>
						<pre>{JSON.stringify(values, 2, null)}</pre>
					</Form>
				)}
			</Formik>
		</div>

	)
}