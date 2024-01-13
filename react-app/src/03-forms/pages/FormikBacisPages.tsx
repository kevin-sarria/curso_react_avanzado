import { FormikErrors, useFormik } from 'formik'

import '../styles/styles.css';

const initialValues = {
    firstName: '',
    lastName: '',
    email: ''
}

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBacisPages = () => {

    const validate = ( { firstName, lastName, email }: FormValues ) => {
        
        const errors: FormikErrors<FormValues> = {};

        if( !firstName ) {
            errors.firstName = 'Required';
        } else if( firstName.length >= 15 ) {
            errors.firstName = 'Must be 15 characters of less';
        }

        if( !lastName ) {
            errors.lastName = 'Required';
        } else if( lastName.length >= 10 ) {
            errors.lastName = 'Must be 10 characters of less';
        }

        if (!email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;

    }


    const { values, handleChange, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: {
            ...initialValues
        },
        onSubmit: () => {
            console.log({ values });
        },
        validate
    });

  return (
    <div>
        <h1>Formik Basic Tutorial</h1>

        <form noValidate onSubmit={handleSubmit}>

            <label htmlFor="firstName">First Name</label>
            <input
                type="text"
                name="firstName"
                id="firstName"
                value={values.firstName}
                onBlur={handleBlur}
                onChange={handleChange}
            />

            { touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }

            <label htmlFor="lastName">Last Name</label>
            <input
                type="text"
                name="lastName"
                id="lastName"
                value={values.lastName}
                onBlur={handleBlur}
                onChange={handleChange}
            />

            { touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }

            <label htmlFor="email">Email Address</label>
            <input
                type="email"
                name="email"
                id="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
            />

            { touched.email && errors.email && <span>{ errors.email }</span> }

            <button type="submit">Submit</button>

        </form>

    </div>
  )
}