import React from 'react'
import Chatbot from './pages/Chatbot'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'

const appRouter = createBrowserRouter([
  {
    path:'/Placemate-Chatbot',
    element:<Chatbot></Chatbot>
  },
  {
    path:'/',
    element:<Home></Home>
  },
  {
    path:'/aboutUs' ,
    element : <AboutUs></AboutUs>
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}


export default App;

