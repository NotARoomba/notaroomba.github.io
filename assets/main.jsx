import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import './css/App.css'

import Home from './js/Home';
import About from './js/About';
import Projects from './js/Projects';
import Extra from './js/Extra';
import Error from './js/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About/>,
    errorElement: <Error />,
  },
  {
    path: "/projects",
    element: <Projects/>,
    errorElement: <Error />,
  },
  {
    path: "/extra",
    element: <Extra/>,
    errorElement: <Error />,
  },
  {
    path: "/*",
    element: <Error />,
  },
]);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<RouterProvider router={router} />);