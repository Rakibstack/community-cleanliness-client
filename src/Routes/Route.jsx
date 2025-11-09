import { createBrowserRouter } from "react-router";
import Homelayout from "../Layout/Homelayout";
import Homepage from "../Pages/Homepage";
import Authentication from "../Layout/Authentication";
import Login from "../Components/Login";
import Register from "../Components/Register";


const router = createBrowserRouter([
    {  
        path: '/',
        element: <Homelayout></Homelayout>,
        children: [
            {
                index: true,
                path: '/',
                element: <Homepage></Homepage>
            }
        ]

    },
    {
        path: '/auth',
        element: <Authentication></Authentication>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;