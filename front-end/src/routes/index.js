//public routes
import Home from "../pages/User/Home";
import Product from "../pages/User/Product/Product";
import ProductDetails from "../pages/User/Product/ProductDetails";
import Cart from "../pages/User/Cart";
import Pay from "../pages/User/Pay";
import PayDetails from "../pages/User/Pay/PayDetails";
import Introduce from "../pages/User/Introduce";
import Contact from "../pages/User/Contact";


const publicRoutes = [
    {
        path: '/', component: Home
    },
    {
        path: '/Product', component: Product
    },
    {
        path: '/ProductDetails', component: ProductDetails
    },
    {
        path: '/Cart', component: Cart
    },
    {
        path: '/Pay', component: Pay
    },
    {
        path: '/PayDetails', component: PayDetails
    },
    {
        path: '/Contact', component: Contact
    },
    {
        path: '/Introduce', component: Introduce
    },

];

const privateRoutes = [];

export {
    publicRoutes, privateRoutes
};