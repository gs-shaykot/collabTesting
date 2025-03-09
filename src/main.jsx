import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainLayout from './Layout/MainLayout.jsx';
import HomeLayout from './Layout/HomeLayout.jsx';
<<<<<<< HEAD
import NewSakib from './Pages/NewSakib.jsx';
=======
import Sumona from './Pages/Sumona.jsx';

>>>>>>> e1a1aead8d5048edf6573044fff6379feee46b0c

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
<<<<<<< HEAD
        path:'/newsakib',
        element:<NewSakib/>

=======
        path: '/sumona',
        element: <Sumona></Sumona>
>>>>>>> e1a1aead8d5048edf6573044fff6379feee46b0c
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
