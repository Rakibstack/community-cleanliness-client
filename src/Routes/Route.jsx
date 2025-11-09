import { createBrowserRouter } from "react-router";
import Homelayout from "../Layout/Homelayout";
import Homepage from "../Pages/Homepage";


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

    }
])

export default router;