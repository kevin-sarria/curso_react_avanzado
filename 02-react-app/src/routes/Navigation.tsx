import { Suspense } from 'react';

import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import logo from '../logo.svg';
import { routes } from "./routes";


export const Navigation = () => {
    return (
        <>
            <Suspense fallback={ <span>Cargando...</span> }>
                <BrowserRouter>
                    <div className="main-layout">

                        <nav>

                            <img src={logo} alt="React Logo" />

                            <ul>

                                {/* TODO: crear navlink dinámicos */}

                                {
                                    routes.map(({ to, name }) => <li key={to}><NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{name}</NavLink></li>)
                                }

                            </ul>

                        </nav>

                        <Routes>
                            {
                                routes.map(({ path, Component }) => (<Route path={path} element={< Component />} key={path} />))
                            }



                            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                        </Routes>

                    </div>
                </BrowserRouter>
            </Suspense>
        </>
    )
}
