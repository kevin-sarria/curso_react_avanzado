import { Formik, Form } from 'formik';

import * as Yup from 'yup';

import formJson from '../data/custom-form.json';
import { MySelect, MyTextInput } from '../components';

interface InitialValues {
    [key: string]: any;
}

interface RequiredFields {
    [key: string]: any;
}

const initialValues: InitialValues = {};
const requiredFields: RequiredFields = {};

for (const input of formJson) {
    initialValues[input.name] = input.value;

    if( !input.validations ) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {

        if( rule.type === 'required' ) {
            schema = schema.required('Este Campo es Requerido');
        }

        // otras reglas...

        if( rule.type === "minLength" ) {
            schema = schema.min( (rule as any).value || 2, `Minimo de ${ (rule as any).value || 2 } caracteres`);
        }

        if( rule.type === "email" ) {
            schema = schema.email('Email no Valido');
        }

    }

    requiredFields[input.name] = schema;

}

const validationSchema = Yup.object({ ...requiredFields });


export const DynamicForm = () => {

  return (
    <div>
        <h1>Dynamic Form</h1>

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            {
                (formik) => (
                    <Form noValidate>
                        
                        {
                            formJson.map( ({ label, type, name, placeholder, options }, index) => {

                                if( type === 'text' || type === 'password' || type === 'email' ) {
                                    return (
                                        <MyTextInput
                                            key={index}
                                            type={(type as any)}
                                            label={label}
                                            name={name}
                                            placeholder={placeholder}
                                        />
                                    )
                                } else if( type === 'select' ) {
                                    return (
                                        <MySelect
                                            key={ index }
                                            label={ label }
                                            name={ name }
                                        >
                                            <option value="">Select an Option</option>
                                            {
                                                options?.map( ({ id, label }, index) => (
                                                    <option key={index} value={id}>{label}</option>
                                                ) )
                                            }
                                        </MySelect>
                                    )
                                }

                            })
                        }

                        <button type='submit'>Guardar</button>
                    </Form>
                )
            }
        </Formik>

    </div>
  )
}
