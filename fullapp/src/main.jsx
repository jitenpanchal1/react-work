import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import { Provider } from 'react-redux'
import store from './reducfiles/store/store'
import { RouterProvider } from 'react-router'
import Mainroute from './mainroute/Mainroute'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={Mainroute} />
    </Provider>
  </StrictMode>,
)
