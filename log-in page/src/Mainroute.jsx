import React from 'react'
import { createBrowserRouter } from 'react-router'
import Login from './Login'
import User from './User'
import Admin from './Admin'
import Register from './Register'

const Mainroute = createBrowserRouter(
    [
        {
            path: "/",
            element:
                <>
                    <Register />
                </>
        },
        {
            path: "/login",
            element:
                <>
                    <Login />
                </>
        },
        {
            path: "/admin/dashboard",
            element:
                <>
                    <Admin />
                </>
        },
        {
            path: "/user/dashboard",
            element:
                <>
                    <User />
                </>
        }
    ]
)

export default Mainroute
