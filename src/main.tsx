import React from 'react'
import ReactDOM from 'react-dom/client'
import data from '../public/data/data.json'

import './index.css'
import { createBrowserRouter, RouterProvider, Route, Link, Outlet, useLoaderData } from 'react-router-dom';
import Trainers from './pages/TrainingPage';
import HomePage  from './pages/HomePage';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ScrollToTop from './hooks/ScrollToTop';
import TrainingPage from './pages/TrainingPage';
import ClassesPage from './pages/ClassesPage';
import ClassPage from './pages/ClassPage';
import BenefitsPage from './pages/BenefitsPage';
import ContactPage from './pages/ContactPage';
import Pool from './pages/Pool';
import SpaPage from './pages/SpaPage';





const AppLayout = () => {
  return(
    <>
    <ScrollToTop />
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
        element: <HomePage />
      },
      {
        path: "/benefits",
        element: <BenefitsPage />
      },
      {
        path: "/training",
        element: <TrainingPage />
      },
      {
        path: "/classes",
          children: [
            {
              path: "/classes",
              element: <ClassesPage />,
            },
            {
              path: "/classes/:id",
              element: <ClassPage />,
            }
          ],
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/spa",
        element: <SpaPage />
      },
      {
        path: "/pool",
        element: <Pool />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
