import { FormEvent } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks';

const initialState = {
    name: '',
    email: '',
    password1: '',
    password2: ''
}

export const RegisterPage = () => {

    const { formData, email, name, password1, password2, onChange, resetForm, isValidEmail } = useForm(initialState)

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({formData});
    }

  return (
    <div>
        <h1>Register Page</h1>

        <form
            onSubmit={ onSubmit }
            noValidate
        >
            
            <input
                type="text"
                placeholder="Name"
                name='name'
                value={name}
                onChange={onChange}
                className={`${ name.trim().length <= 0 && 'has-error' }`}
            />

            { name.trim().length <= 0 && <span>Este campo es Obligatorio</span> }

            <input
                type="email"
                placeholder="Email"
                name='email'
                value={email}
                onChange={onChange}
                className={`${ !isValidEmail(email) && 'has-error' }`}
            />
            { !isValidEmail(email) && <span>Este campo es Obligatorio</span> }

            <input
                type="password"
                placeholder="Password"
                name='password1'
                value={password1}
                onChange={onChange}
                className={`${ password1.trim().length < 8 && 'has-error' }`}
            />
            { password1.trim().length < 8 && <span>Este campo es Obligatorio</span> }

            <input
                type="password"
                placeholder="Repeat Password"
                name='password2'
                value={password2}
                onChange={onChange}
                className={`${ password2.trim().length < 8 && 'has-error' }`}
            />
            { password2.trim().length < 8 && <span>Este campo es Obligatorio</span> }

            <button type="submit">Create</button>
            <button type="button" onClick={resetForm}>Reset</button>

        </form>

    </div>
  )
}
