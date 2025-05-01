import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import React from 'react';


import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import Mainroute from './assets/Mainroute/Mainroute';

createRoot(document.getElementById('root')).render(
  <RouterProvider
    router={Mainroute}>
  </RouterProvider>
)
