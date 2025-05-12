import React from 'react'
import { createBrowserRouter } from 'react-router'
import Header from '../Header/Header'
import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import Learning from '../Learning/Learning'
import Usestate from '../Learning/Usestate'
import Useeffect from '../Learning/Useeffect'
import Usecontext from "../Learning/Usecontext"
import Inputcontrolledcompo from '../Learning/Inputcontrolledcompo'
import Themechanger from '../Learning/Themechanger'
import BGcgange from '../Learning/BG-cgange'
import ToDolist from '../Learning/To-Dolist'
import Seehoccompo from '../Learning/Seehoccompo'
import Usereducer from '../Learning/Usereducer'
import Useref from '../Learning/Useref'
import Cushcompo from '../Learning/Cushcompo'
import Navigation from '../Learning/Navigation'
import Paawordgenerator from '../Learning/Paawordgenerator'
import Register from '../Learning/Register'

const Mainroute = createBrowserRouter(
    [
        {
            path: "/",
            element:
                <>
                    <Header />
                    <Home />
                </>
        },
        {
            path: "/home",
            element:
                <>
                    <Header />
                    <Home />
                </>
        },
        {
            path: "/contact",
            element:
                <>
                    <Header />
                    <Contact />
                </>
        },
        {
            path: "/learning",
            element:
                <>
                    <Header />
                    <Learning />
                </>,
            children: [
                {
                    index: true,
                    element:
                        <>
                            <Usestate />
                        </>
                },
                {
                    path: "usestate",
                    element:
                        <>
                            <Usestate />
                        </>
                },
                {
                    path: "useeffect",
                    element:
                        <>
                            <Useeffect />
                        </>
                },
                {
                    path: "usecontext",
                    element:
                        <>
                            <Usecontext />
                        </>
                },
                {
                    path: "input",
                    element:
                        <>
                            <Inputcontrolledcompo />
                        </>
                },
                {
                    path: "theme",
                    element:
                        <>
                            <BGcgange />
                        </>
                },
                {
                    path: "todolist",
                    element:
                        <>
                            <ToDolist />
                        </>
                },
                {
                    path: "hoc",
                    element:
                        <>
                            <Seehoccompo />
                        </>
                },
                {
                    path: "usereduce",
                    element:
                        <>
                            <Usereducer />
                        </>
                },
                {
                    path: "useref",
                    element:
                        <>
                            <Useref />
                        </>
                },
                {
                    path: "custom",
                    element:
                        <>
                            <Cushcompo />
                        </>
                },
                {
                    path: "navigation",
                    element:
                        <>
                            <Navigation />
                        </>
                },
                {
                    path: "password",
                    element:
                        <>
                            <Paawordgenerator />
                        </>
                },
                {
                    path: "register",
                    element:
                        <>
                            <Register />
                        </>
                }
            ]
        }
    ]
)

export default Mainroute