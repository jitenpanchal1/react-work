
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import Mainroute from './Mainroute'
import { StrictMode } from 'react'



createRoot(document.getElementById('root')).render(
    <RouterProvider
      router={Mainroute}>
    </RouterProvider>
)
