import React from "react";
import Home from "./component/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fruits from "./component/Fruits";
import Dairy from "./component/Dairy";
import SeaFood from "./component/SeaFood";
import Layout from "./component/Layout";
import AllProducts from "./component/AllProducts";
import Errorpage from "./component/Errorpage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Errorpage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/fruits",
          element: <Fruits />,
        },
        {
          path: "/dairy",
          element: <Dairy />,
        },
        {
          path: "/seaFood",
          element: <SeaFood />,
        },
        {
          path: "/allproducts",
          element: <AllProducts/>
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
