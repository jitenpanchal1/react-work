import React from 'react'
import { createBrowserRouter } from 'react-router'
import Header from './Header'
import Home from './Home'
import About from './About'
import Contact from './Contact'


let Mainroute = createBrowserRouter(
    [
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
        }
    ]
)

export default Mainroute
