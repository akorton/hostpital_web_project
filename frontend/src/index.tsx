import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './login/LoginPage';
import RegisterPage from './register/RegisterPage';


const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
