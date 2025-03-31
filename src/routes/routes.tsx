import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Auth from "../pages/auth";
import Cart from "../pages/cart";
import Error from "../pages/error";
import Home from "../pages/home";
import Product from "../pages/product";
import Saves from "../pages/saves";

export const routes = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                element: <Home />,
                path: "/"
            },
            {
                element: <Product />,
                path: "/product/:id"
            },
            {
                element: <Cart />,
                path: "/cart"
            },
            {
                element: <Saves />,
                path: "/save"
            },
            {
                element: <Auth />,
                path: "/login"
            },
            {
                element: <Error />,
                path: "*"
            }
        ]
    }
]);