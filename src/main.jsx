import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import router from './Routes/Route.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import { ThemeProvider } from './ThemeProvider/ThemeProvider .jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
    <ThemeProvider>
       <RouterProvider router={router} />
    </ThemeProvider>
   </AuthProvider>
  </StrictMode>,
)
