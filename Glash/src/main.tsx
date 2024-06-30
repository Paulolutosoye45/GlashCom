import React from 'react'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '../app/globals.css'
import DashBoard from './components/dashboard/index.tsx'
// import Login from './Pages/sign-in/index.tsx'
// import SignUP from './Pages/sign-up/index.tsx'
import MediaPages from './components/dashboard/switch/MediaPagesSignUp.tsx'
import MediaPagesLogin from './components/dashboard/switch/MediaPagesLogis.tsx'

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
     <Route path='/' index element={<DashBoard/>}/>
     <Route path='/sign-up' index element={<MediaPages/>}/>
     <Route path='/Login' index element={<MediaPagesLogin/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)