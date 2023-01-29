import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { theme } from './theme/theme';
import Home from '@/pages/home/Home';
import Services from '@/pages/services/Services';
import Contact from '@/pages/contact/Contact';
import Book from '@/pages/book/book';
import AboutUs from '@/pages/aboutUs/aboutUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/book",
    element: <Book />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default Layout