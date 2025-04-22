import React from 'react'
import { Route, Routes } from 'react-router'
import Usestate from './Usestate'
import Functioncompolist from './Functioncompolist'

export default function Functionscompo() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Functioncompolist />}>
                    <Route path='usestate' element={<Usestate />}></Route>
                </Route>
            </Routes>
        </>
    )
}
