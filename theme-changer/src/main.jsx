import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Context from './Contextcompo.jsx'

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

createRoot(document.getElementById('root')).render(
  <Context>
    <App />
  </Context>
)
