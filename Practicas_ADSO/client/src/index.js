import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './pages/Login';
import Registro from './pages/Registro';

const router = createBrowserRouter(
  {
    path: '/',
    element: <Login/>,
    errorElement: <div>ERROR 404!!</div>
  },
  {
    path: '/registro',
    element: <Registro/>,
    errorElement: <div>ERROR 404!!</div>
  }
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
  
