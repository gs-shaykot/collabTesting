import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainLayout from './Layout/MainLayout.jsx';
import HomeLayout from './Layout/HomeLayout.jsx';
import NewSakib from './Pages/NewSakib.jsx';
import Sumona from './Pages/Sumona.jsx';
import Masud from './Pages/masud.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <HomeLayout></HomeLayout>
      },
      {
        path: '/newsakib',
        element: <NewSakib />
      },
      {
        path: '/sumona',
        element: <Sumona></Sumona>
      },
      {
        path: '/masud',
        element: <Masud />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
