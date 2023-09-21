import { LazyExoticComponent, lazy } from "react";
import { NoLazy } from "../01-lazyload";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload";

type JSXComponent = () => JSX.Element;

interface Routes {
    to: string;
    path: string;
    Component: JSXComponent | LazyExoticComponent<JSXComponent>;
    name: string;
}

const LazyLayout = lazy( () => import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout') );

export const routes: Routes[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'lazy-1'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
];