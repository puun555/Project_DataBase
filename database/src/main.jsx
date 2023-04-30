import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { DataProvider } from './views/Datacontext';
import Home from './views/home'
import BooksFlight from './views/booksfligh'
import './index.css'
import PassengerInformation from './views/passengerInformation'
import Meat from './views/booksmeat'
import Summary from './views/sumary'
import History from './views/้history'
import Profile  from './views/profile'
import Login from './views/login'
import Register from './views/register'
import SelectSeat from './views/selectSeat'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login></Login>
  },
  {
    path: "/home",
    element: <Home></Home>
  },
  {
    path:'/booksflights',
    element: <BooksFlight></BooksFlight>
  },
  {
    path:'/passenger',
    element: <PassengerInformation></PassengerInformation>
  },{
    path: '/meat',
    element: <Meat></Meat>
  },
  {
    path: '/summary',
    element: <Summary></Summary>
  },
  {
    path: '/history',
    element: <History></History>
  },
  {
    path: '/profile',
    element: <Profile></Profile>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/selectseat',
    element: <SelectSeat></SelectSeat>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router}></RouterProvider>
    </DataProvider>
  </React.StrictMode>,
)
