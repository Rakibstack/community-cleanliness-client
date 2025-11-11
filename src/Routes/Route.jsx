import { createBrowserRouter } from "react-router";
import Homelayout from "../Layout/Homelayout";
import Homepage from "../Pages/Homepage";
import Authentication from "../Layout/Authentication";
import Login from "../Components/Login";
import Register from "../Components/Register";
import ForgotPass from "../Components/ForgotPass";
import AddIssues from "../Components/Add-issues";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {  
        path: '/',
        element: <Homelayout></Homelayout>,
        children: [
            {
                index: true,
                path: '/',
                element: <Homepage></Homepage>
            },
            {
                path:'/addissues',
                element: <PrivateRoute>
                    <AddIssues></AddIssues>
                </PrivateRoute>
            },{
            
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
            },
            {  
                path: '/auth/forgotpass',
                element:<ForgotPass></ForgotPass>

            }
        ]
    }
])

export default router;