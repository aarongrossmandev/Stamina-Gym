import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import HomePage  from './pages/HomePage';
import Navbar from './components/navbar';
import ScrollToTop from './hooks/ScrollToTop';
import TrainingPage from './pages/TrainingPage';
import ClassesPage from './pages/ClassesPage';
import ClassPage from './pages/ClassPage';
import BenefitsPage from './pages/BenefitsPage';
import ContactPage from './pages/ContactPage';
import Pool from './pages/Pool';
import SpaPage from './pages/SpaPage';
import ErrorPage from './pages/ErrorPage';





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
    errorElement: <ErrorPage />,
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
