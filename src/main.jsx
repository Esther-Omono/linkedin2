import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { router } from './routes/router';
import { ToastContainer } from "react-toastify";
import { GoogleOAuthProvider } from '@react-oauth/google';
import "react-toastify/dist/ReactToastify.css";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId='258541326194-fjcs525hsfnb3fjr9m02jtmqh7v8486g.apps.googleusercontent.com'>
        <React.StrictMode>
            <RouterProvider router={router} />
            <ToastContainer />
        </React.StrictMode>
    </GoogleOAuthProvider>,
)
