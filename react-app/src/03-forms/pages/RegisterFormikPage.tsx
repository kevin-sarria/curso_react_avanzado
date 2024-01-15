import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';


import '../styles/styles.css';

const initialState = {
    name: '',
    email: '',
    password1: '',
    password2: ''
}

export const RegisterFormikPage = () => {

    const resetForm = (resetForm: any) => {
        resetForm();
    }

  return (
    <div>

        <h1>Register Formik Page</h1>

        <Formik
            initialValues={initialState}
            onSubmit={(values) => {
                console.log({ values });
            }}
            validationSchema={
                Yup.object({
                    name: Yup.string().min(2, 'Debe tener al menos 2 caracteres').max(15, 'Debe tener como maximo 15 caracteres').required('Requerido'),
                    email: Yup.string().email('El correo no tiene un formato valido').required('Requerido'),
                    password1: Yup.string().min(6, 'Debe tener al menos 6 caracteres').required('Requerido'),
                    password2: Yup.string().min(6, 'Debe tener al menos 6 caracteres').oneOf([Yup.ref('password1')], 'Las Passwords deben ser Iguales').required('Requerido'),
                })
            }
        >
            {
                (formik) => (
                    <Form>
                
                        <MyTextInput
                            label="Name"
                            name="name"
                            placeholder="Tu Nombre"
                        />

                        <MyTextInput
                            label="Email Address"
                            name="email"
                            placeholder="Tu Email"
                            type="email"
                        />

                        <MyTextInput
                            label="Password"
                            name="password1"
                            placeholder="Tu Password"
                            type="password"
                        />

                        <MyTextInput
                            label="Repeat Password"
                            name="password2"
                            placeholder="Repite tu Password"
                            type="password"
                        />

                        <button type="submit">Create</button>
                        <button type="button" onClick={() => resetForm(formik.resetForm)}>Reset</button>

                    </Form>
                )
            }
        </Formik>


    </div>
  )
}
