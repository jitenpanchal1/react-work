import React, { Suspense } from 'react'

import { createBrowserRouter } from 'react-router'
import Header from './Header'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Help from './Help'
import Example from './Example'
// import Exampless from './Exampless'

let Exampless = React.lazy(() => import('./Exampless.jsx'))


const Mainroute = createBrowserRouter([
    {
        path: "/",
        element: <>
            <Header />
            <Home />
        </>
    }, {
        path: "/about",
        element: <>
            <Header />
            <About />
        </>
    }, {
        path: "/contact",
        element: <>
            <Header />
            <Contact />
        </>
    }, {
        path: "/help",
        element: <>
            <Header />
            <Help />
        </>
    }, {
        path: "/example",
        element: <>
            <Header />
            <Example />
        </>,
        children: [{
            path: "exampless/*",
            element: <>
                <Suspense fallback="Loading....">
                    <Exampless />
                </Suspense>
            </>
        }]
    }
])

export default Mainroute
