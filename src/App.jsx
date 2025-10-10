import React from 'react'
import {createBrowserRouter,RouterProvider,} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'


import AppLayout from './component/AppLayout'
import ErrorPage  from './Pages/ErrorPage'
import FormPage from './Pages/FormPage'



const App = () => {
    const router = createBrowserRouter([
       
        {
            path : '/',
            element:<AppLayout/>,
            errorElement:<ErrorPage/>,
            children:[
                
                    {
                        path : '/',
                        element:<Home/>
                    },
                    {
                        path : '/about',
                        element:<About/>,
                    },
                   
                    {
                        path : '/Register-Professional',
                        element:<FormPage/>
                    },
                    
                    
                
            ]
        },
        
    ])
   
  return (
    <>
    
    <RouterProvider router = {router}/>
    </>
  )
}

export default App