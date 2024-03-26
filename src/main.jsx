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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: ()=> fetch(`data.json`),
        element: <Home></Home>
      },
      {
        path: "/list",
        element: <ListBooks></ListBooks>
      },
      {
        path: "/read",
        element: <PageRead></PageRead>
      },
      {
        path: "/single/:id",
        element: <SinglePage></SinglePage>,
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
