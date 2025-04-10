import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router'
import Mainroute from './Mainroute.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider
      router={Mainroute}>
    </RouterProvider>
  </StrictMode>,
)
