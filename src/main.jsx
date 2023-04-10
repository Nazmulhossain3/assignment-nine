import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './component/Home';
import Statistics from './component/Statistics';
import Blog from './component/Blog';
import AppliedJobs from './component/AppliedJobs';
import JodDetails from './component/JodDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path : '/',
        element : <Home></Home>,
        loader : ()=> fetch('category.json')
        
      },
      {
        path : '/JodDetails/:id',
        element : <JodDetails></JodDetails>
      },
      {
        path : '/Statistics',
        element : <Statistics></Statistics>
      },
      {
        path: '/Blog',
        element: <Blog></Blog>
      },
      {
        path: '/Applied Jobs',
        element: <AppliedJobs></AppliedJobs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
