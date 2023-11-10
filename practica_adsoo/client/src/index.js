import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './pages/Login';
import Registro from './pages/Registro';
import PrestamoAmbientes from './pages/PrestamoAmbientes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,
    errorElement: <div>ERROR 404!!</div>
  },
  {
    path: '/registro',
    element: <Registro/>,
    errorElement: <div>ERROR 404!!</div>
  },
  {
    path: '/prestamoAmbientes',
    element: <PrestamoAmbientes/>,
    errorElement: <div>ERROR 404!!</div>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
  

