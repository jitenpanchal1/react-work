import React from 'react'
import { Route, Routes } from 'react-router'
import Usestate from './Usestate'
import Functioncompolist from './Functioncompolist'
import UserId from './UserId'

export default function Functionscompo() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Functioncompolist />}>
                    <Route path='usestate' element={<Usestate />}></Route>
                    <Route path='userid' element={<UserId />}></Route>
                </Route>
            </Routes>
        </>
    )
}
