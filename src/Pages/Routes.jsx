import { lazy } from "react";

const Home = lazy(()=> import('../Pages/Home'));
const About = lazy (()=> import('../Pages/About'));
const Shop = lazy (()=> import('../Pages/Shop'));
const Contact = lazy (()=> import('../Pages/Contact'));



export const routerData = [
    {
        id: 1,
        to: '/',
        text:'Home',
        element: <Home />
    },
    {
        id: 2,
        to: '/shop',
        text:'Shop',
        element: <Shop />
    },
    {
        id: 3,
        to: '/about',
        text:'About',
        element: <About />
    },
    {
        id: 4,
        to: '/contact',
        text:'Contact',
        element: <Contact />
    }
   
]
export default routerData
