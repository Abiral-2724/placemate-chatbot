import React from 'react'
import Chatbot from './pages/Chatbot'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'

const appRouter = createBrowserRouter([
  {
    path:'/Placemate-Chatbot',
    element:<Chatbot></Chatbot>
  },
  {
    path:'/',
    element:<Home></Home>
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

