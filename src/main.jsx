import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Meal from './Meal';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <div>Nothing</div>,
      },
      {
        path: "blog",
        element: <div>Nothing Blog Here!</div>,
      },
      {
        path: "meal",
        element: <Meal/>,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b"),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
