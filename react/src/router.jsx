import { createBrowserRouter } from "react-router-dom";
import Home from "./views/public/Home"
import AboutUs from "./views/public/AboutUs"

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
export default router;