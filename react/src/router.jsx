import { createBrowserRouter } from "react-router-dom";
import Home from "./views/public/home"
import AboutUs from "./views/public/aboutUs"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/about-us',
        element: <AboutUs/>
    }
]);