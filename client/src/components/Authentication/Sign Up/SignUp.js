import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { Countries } from './CountryList'

const header = {
    color: 'red'
}

const SignUp = () => {
    const form = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            country: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        },
    })
    return (
        <div>
            <h1 style={header} className='header'>Sign Up</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='firstName'>First Name</label>
                <input
                    id='firstName'
                    name='firstName'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
                <input
                    id='lastName'
                    name='lastName'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />
                <input
                    id='email'
                    name='email'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <input
                    id='firstName'
                    name='firstName'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
            </form>
        </div>
    )
}

export default SignUp