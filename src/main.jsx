import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import './index.css';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import ListBooks from './components/ListBooks/ListBooks.jsx';
import PageRead from './components/PageRead/PageRead.jsx';
import SinglePage from './components/SinglePage/SinglePage.jsx';
import ContactUs from './components/ContactUS/ContactUs.jsx';
import About from './components/About/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: ()=> fetch(`data.json`),
        element: <Home></Home>,
      },
      {
        path: "/list",
        loader: ()=> fetch(`data.json`),
        element: <ListBooks></ListBooks>
      },
      {
        path: "/read",
        element: <PageRead></PageRead>
      },
      {
        path: "/single/:id",
        element: <SinglePage></SinglePage>,
        loader: ()=> fetch('../data.json'),
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/about",
        element: <About></About>
      }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
