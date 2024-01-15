import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import { MyCheckbox, MySelect, MyTextInput } from '../components';


export const FormikAbstractation = () => {

  return (
    <div>
        <h1>Formik Abstractation</h1>

        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: '',

            }}
            onSubmit={(values) => {
                // console.log({ values })
            }}
            validationSchema={
                Yup.object({
                    firstName: Yup.string().max(15, 'Debe Tener 15 caracteres o menos').required('Requerido'),
                    lastName: Yup.string().max(15, 'Debe Tener 15 caracteres o menos').required('Requerido'),
                    email: Yup.string().email('El correo no tiene un formato valido').required('Requerido'),
                    terms: Yup.boolean().isTrue('Debe de aceptar las condiciones').required(),
                    jobType: Yup.string().notOneOf(['it-jr'], 'Esta opcion no es permitida').required()
                })
            }
        >
            { (formik) => (
                <Form>

                    <MyTextInput
                        label="First Name"
                        name="firstName"
                        placeholder="Tu Nombre"
                    />

                    <MyTextInput
                        label="Last Name"
                        name="lastName"
                        placeholder="Tu Apellido"
                    />

                    <MyTextInput
                        label="Email Address"
                        name="email"
                        placeholder="Tu Email"
                        type="email"
                    />

                    <MySelect label="Job Type" name="jobType">
                        <option value="">Pick something</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="it-senior">IT Senior</option>
                        <option value="it-jr">IT Jr.</option>
                    </MySelect>

                    <MyCheckbox name="terms" label="Accept Terms & Conditions" />
        
                    <button type="submit">Submit</button>
        
                </Form>
            ) }
        </Formik>

    </div>
  )
}
