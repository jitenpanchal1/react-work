import React from 'react'
import { createBrowserRouter } from 'react-router'
import Header from '../Header/Header'
import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import Learning from '../Learning/Learning'
import Usestate from '../Learning/Usestate'
import Useeffect from '../Learning/Useeffect'

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
            path: "/home",
            element:
                <>
                    <Header />
                    <Home />
                </>
        }, {
            path: "/contact",
            element:
                <>
                    <Header />
                    <Contact />
                </>
        }, {
            path: "/learning",
            element:
                <>
                    <Header />
                    <Learning />
                </>,
            children: [
                {
                    path: "usestate",
                    element:
                        <>
                            <Usestate />
                        </>
                }, {
                    path: "useeffect",
                    element:
                        <>
                            <Useeffect />
                        </>
                }
            ]
        }
    ]
)

export default Mainroute