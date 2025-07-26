import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import Home from './component/Home/Home';
import UserLogin from './LoginForm/UserLogin';
import UserSignUp from './LoginForm/UserSignUp';
import AuthProvider from './provider/AuthProvider';
import CardDetails from './component/Card/CardDetails';
import PrivetRouther from './PrivetRouter/PrivetRouther';
import ErrorPage from './ErrorPage/ErrorPage';
import DiscoverMore from './component/Header/DIscoverMore';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path:'*',
        element:<ErrorPage></ErrorPage>
      },
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <UserLogin></UserLogin>
      },
      {
        path: '/signUp',
        element: <UserSignUp></UserSignUp>
      },
      {
        path:`/details/:id`,
        element:<PrivetRouther><CardDetails></CardDetails></PrivetRouther>,
        loader:() => fetch(`/career.json`)
      },
      {
        path:'/discover',
        element:<DiscoverMore></DiscoverMore>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
