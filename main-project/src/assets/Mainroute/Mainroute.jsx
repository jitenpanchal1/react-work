import React from 'react'
import { createBrowserRouter } from 'react-router'
import Header from '../Header/Header'
import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import Learning from '../Learning/Learning'
import Usestate from '../Learning/Usestate'
import Useeffect from '../Learning/Useeffect'
import Childforcontext from '../Learning/childforcontext'
import Inputcontrolledcompo from '../Learning/Inputcontrolledcompo'
import Themechanger from '../Learning/Themechanger'
import BGcgange from '../Learning/BG-cgange'
import ToDolist from '../Learning/To-Dolist'
import Seehoccompo from '../Learning/Seehoccompo'
import Usereducer from '../Learning/Usereducer'
import Useref from '../Learning/Useref'
import Cushcompo from '../Learning/Cushcompo'
import Navigation from '../Learning/Navigation'

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
                }, {
                    path: "usecontext",
                    element:
                        <>
                            <Childforcontext />
                        </>
                }, {
                    path: "input",
                    element:
                        <>
                            <Themechanger>
                                <Inputcontrolledcompo />
                            </Themechanger>
                        </>
                }, {
                    path: "theme",
                    element:
                        <>
                            <Themechanger>
                                <BGcgange />
                            </Themechanger>
                        </>
                }, {
                    path: "todolist",
                    element:
                        <>
                            <Themechanger>
                                <ToDolist />
                            </Themechanger>
                        </>
                }, {
                    path: "hoc",
                    element:
                        <>
                            <Seehoccompo />
                        </>
                }, {
                    path: "usereduce",
                    element:
                        <>
                            <Usereducer />
                        </>
                }, {
                    path: "useref",
                    element:
                        <>
                            <Useref />
                        </>
                }, {
                    path: "custom",
                    element:
                        <>
                            <Cushcompo />
                        </>
                }, {
                    path: "navigation",
                    element:
                        <>
                            <Navigation />
                        </>
                }
            ]
        }
    ]
)

export default Mainroute