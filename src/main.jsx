import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import AuthProvider from './components/AuthProvider';
import Orders from './components/Orders';
import PrivateRoute from './components/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path: '/signin',
        element: <Signin></Signin>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
