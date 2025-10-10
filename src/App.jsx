import React from 'react'
import {createBrowserRouter,RouterProvider,} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'


import AppLayout from './component/AppLayout'
import ErrorPage  from './Pages/ErrorPage'
import FormPage from './Pages/FormPage'
import Service from './pages/Service'


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
                        path : '/service',
                        element:<Service/>
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