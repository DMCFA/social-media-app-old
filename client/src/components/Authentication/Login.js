import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import {
    TextField
} from '@material-ui/core'

export default function Login() {
    return (
        <div>
            <h1>Travel Connect</h1>
            <Formik initialValues={{
                email: '',
                password: ''
            }} onSubmit={(data) => {
                console.log(data);
            }}>
                {({ values, handleChange, handleBlur, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <TextField name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                    </form>
                )}
            </Formik>
        </div>

    )
}