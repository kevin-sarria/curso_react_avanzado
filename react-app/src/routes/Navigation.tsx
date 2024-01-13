import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";

import logo from '../assets/react.svg';
import { LazyPage3 } from "../01-lazyload";
import { FormikAbstractation, FormikBacisPages, FormikComponents, FormikYupPages, RegisterPage } from "../03-forms/pages";

export const Navigation = () => {
  return (
    <BrowserRouter>

        <div className="main-layout">
            <nav>
                <img src={logo} alt="React Logo" />

                <ul>
                    <li>
                        <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register Page</NavLink>
                    </li>

                    <li>
                        <NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Basic</NavLink>
                    </li>

                    <li>
                        <NavLink to="/formik-yup" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Yup</NavLink>
                    </li>

                    <li>
                        <NavLink to="/formik-components" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Components</NavLink>
                    </li>

                    <li>
                        <NavLink to="/formik-abstractation" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Abstractation</NavLink>
                    </li>

                    <li>
                        <NavLink to="/lazy3" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Users</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/register" element={ <RegisterPage /> } />
                <Route path="/formik-basic" element={ <FormikBacisPages /> } />
                <Route path="/formik-yup" element={ <FormikYupPages /> } />
                <Route path="/formik-components" element={ <FormikComponents /> } />
                <Route path="/formik-abstractation" element={ <FormikAbstractation /> } />
                <Route path="/lazy3" element={ <LazyPage3 /> } />

                <Route path="/*" element={ <Navigate to="/lazy1" /> } />
            </Routes>


        </div>

    </BrowserRouter>
  )
}
