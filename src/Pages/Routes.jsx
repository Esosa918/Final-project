import { lazy } from "react";

const Home = lazy(()=> import('../Pages/Home'));
const About = lazy (()=> import('../Pages/About'));
const Shop = lazy (()=> import('../Pages/Shop'));
const Contact = lazy (()=> import('../Pages/Contact'));
const Singleproduct = lazy (()=> import('../Pages/Singleproduct'));
// const Productcomparison = lazy (()=> import('../Pages/Productcomparison'));
const Checkout = lazy (()=> import('../Pages/Checkout'));
const Cart = lazy (()=> import('../Pages/Cart'));



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
    },
    {
        id: 5,
        to: '/Singleproduct',
        text:'Singleproduct',
        element: <Singleproduct />
    },
    {
        id: 6,
        to: '/Checkout',
        text:'Checkout',
        element: <Checkout />
    },
    {
        id: 7,
        to: '/Cart',
        text:'Cart',
        element: <Cart />
    }
   
]
export default routerData
