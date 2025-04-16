import React from 'react'
import { createBrowserRouter } from 'react-router'
import Home from './Home'
import Header from './Header'
import Product from './Product'
import Contact from './Contact'
import About from './About'
import Help from './Help'

const Mainroute = createBrowserRouter(
    [
        {
            path: "/",
            element:
                <>
                    <Header />
                    <Home />
                </>
        }, {
            path: "/product",
            element:
                <>
                    <Header />
                    <Product />
                </>
        }, {
            path: "/contact",
            element:
                <>
                    <Header />
                    <Contact />
                </>
        }, {
            path: "/about",
            element:
                <>
                    <Header />
                    <About />
                </>
        }, {
            path: "/help",
            element:
                <>
                    <Header />
                    <Help />
                </>
        }

    ]
)

export default Mainroute
