import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider, Route, Link, Outlet } from 'react-router-dom';
import Trainers from './pages/Trainers';
import HomePage  from './pages/HomePage';
import Navbar from './components/navbar';



const AppLayout = () => {
  return(
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <HomePage />
        ),
      },
      {
        path: "trainers",
        element: <Trainers />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
