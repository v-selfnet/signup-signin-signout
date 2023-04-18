import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';

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
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
