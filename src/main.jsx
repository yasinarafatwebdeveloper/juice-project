// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'


// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import PostUser from './Components/PostUser/PostUser.jsx';
// import Home from './Components/Home/Home.jsx';
// import About from './Components/About/About.jsx';


// const router = createBrowserRouter([
//   {
//     path: "",
//     element: <PostUser></PostUser>,


//     children: [
//       {
//         path: "/home",
//         element: <Home></Home>,
//       },
//       {
//         path:"/about",
//         element:<About></About>
//       }
//     ],
//   },
// ]);
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//   <RouterProvider router={router} />
//   </StrictMode>,
// )






import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import PostUser from './Components/PostUser/PostUser.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Update from './Components/UpdateItem/Update.jsx';
import Register from './Components/Register/Register.jsx';
import Login from './Components/Login/Login.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import RegGet from './Components/RegGet/RegGet.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PostUser />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
        loader:()=> fetch("http://localhost:5000/juice")
      },
      {
        path:"/update/:id",
        element:<Update></Update>,
        loader:({params})=> fetch(`http://localhost:5000/juice/${params.id}`)
      },
      {
  path:"/register",
  element:<Register></Register>

      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/regget",
        element:<RegGet></RegGet>,
        loader:()=> fetch("http://localhost:5000/fruit")
      }

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    
  </StrictMode>
);
