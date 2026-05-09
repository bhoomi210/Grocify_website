import React from 'react'
import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom'

import Layout from './component/Layout'
import Home from './component/Home'
import Dairy from './component/Dairy'
import Fruits from './component/Fruits'
import SeaFood from './component/SeaFood'
import Allproduct from './component/AllProducts'

import About from './About'
import Process from './Process'
import Contact from './Contact'



const App = () => {

  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/process",
          element: <Process />,
        },
        {
          path: "/contact",
          element: <Contact />,
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
          path: "/seafood",
          element: <SeaFood />,
        },
        {
          path: "/allproduct",
          element: <Allproduct />,
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App