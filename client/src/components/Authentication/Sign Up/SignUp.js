import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { Countries } from './CountryList'

const header = {
    color: 'red'
}

const SignUp = () => {
    return (
        <div>
            <h1 style={header} className='header'>Sign Up</h1>
        </div>
    )
}

export default SignUp