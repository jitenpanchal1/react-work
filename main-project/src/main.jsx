import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import Mainroute from './assets/Mainroute/Mainroute'
import Themechanger from './assets/Learning/Themechanger'





createRoot(document.getElementById('root')).render(
  <Themechanger>
    <RouterProvider
      router={Mainroute}>
    </RouterProvider>
  </Themechanger>
)
