import { createBrowserRouter } from "react-router";
import Homelayout from "../Layout/Homelayout";
import Homepage from "../Pages/Homepage";
import Authentication from "../Layout/Authentication";
import Login from "../Components/Login";
import Register from "../Components/Register";
import ForgotPass from "../Components/ForgotPass";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Allissues from "../Components/Allissues";
import DetailsPages from "../Components/DetailsPages";
import Myissues from "../Components/Myissues";
import MyContribute from "../Components/MyContribute";
import PageNotFound from "../Components/PageNotFound";
import AboutSection from "../Components/AboutSection";
import ServicesSection from "../Components/Service";
import HowItWorks from "../Components/HowItWork";
import DashboardLayout from "../Layout/DashboardLayout";
import AddIssues from "../Components/Add-issues";
import DashboardHome from "../Components/DashboardHome";
import Profile from "../Components/Profile";


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
                path: '/allissues',
                element:
                    <Allissues></Allissues>
            },
            {
                path: '/aboutsection',
                element: <AboutSection></AboutSection>
            },
            {
                path: '/services',
                element: <ServicesSection></ServicesSection>
            },
            {
                path: '/howitworks',
                element: <HowItWorks></HowItWorks>
            },
            {
                path: '/detailspage/:id',
                loader: ({ params }) => fetch(`https://cleanzone-report-server.vercel.app/detailspage/${params.id}`),
                element: <PrivateRoute>
                    <DetailsPages></DetailsPages>
                </PrivateRoute>
            },
           
        ]

    },
    {
        path: '/dashboard',
        element:<PrivateRoute>
            <DashboardLayout></DashboardLayout>         
        </PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                index: true,
                element: <DashboardHome></DashboardHome>
            },
            {   
                
                path: '/dashboard/addissues',
                element: <AddIssues></AddIssues>
            },
            {   
                
                path: '/dashboard/myissues',
                element: <Myissues></Myissues>
            },
            {   
                
                path: '/dashboard/mycontribute',
                element: <MyContribute></MyContribute>
            },
            {   
                
                path: '/dashboard/profile',
                element: <Profile></Profile>
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
                element: <ForgotPass></ForgotPass>

            },
           
        ]
    },

     {
                path: '*',
                element: <PageNotFound></PageNotFound>
            }
])

export default router;