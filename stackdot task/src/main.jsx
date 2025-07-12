import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './reduxfolder/reduxstore/Store.js'
import Addedproduct from './Addedproduct.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <StrictMode>
      <App />
      <Addedproduct />
    </StrictMode>
  </Provider>
)
