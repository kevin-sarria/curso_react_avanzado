import { Formik, Form } from 'formik';

import formJson from '../data/custom-form.json';
import { MyTextInput } from '../components';

export const DynamicForm = () => {

  return (
    <div>
        <h1>Dynamic Form</h1>

        <Formik
            initialValues={{
                name: ''
            }}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            {
                (formik) => (
                    <Form>
                        
                        {
                            formJson.map( ({ label, type, name, placeholder, value }, index) => (
                                <MyTextInput
                                    key={index}
                                    type={type as any}
                                    label={label}
                                    name={name}
                                    placeholder={placeholder}
                                    value={value}
                                />
                            ) )
                        }

                        <button type='submit'>Guardar</button>
                    </Form>
                )
            }
        </Formik>

    </div>
  )
}
