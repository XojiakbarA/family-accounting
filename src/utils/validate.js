import * as yup from 'yup'

export const loginValidationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required')
})

export const registerValidationSchema = yup.object({
    name: yup
        .string('Enter Your Name')
        .required('Name is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    password_confirmation: yup
        .string('Enter your password')
        .required('Please re-type password')
        .when('password', 
            {
                is: val => (val && val.length > 0 ? true : false),
                then: yup.string().oneOf(
                    [yup.ref('password')],
                    'Both password need to be the same'
                    )
            })
})

export const memberValidationSchema = yup.object({
    first_name: yup
        .string('Enter First Name')
        .required('First Name is required'),
    last_name: yup
        .string('Enter Last Name')
        .required('Last Name is required'),
    job: yup
        .string('Enter Job')
        .required('Job is required')
})

export const financeValidationSchema = yup.object({
    category_id: yup
        .number('Select Category')
        .required('Category is required'),
    sub_category_id: yup
        .number('Select Sub Category')
        .required('Sub Category is required'),
    member_id: yup
        .number('Select Family Member')
        .required('Family Member is required'),
    amount: yup
        .string('Enter Amount')
        .required('Amount is required')
})