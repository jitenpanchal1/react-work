import React, { Component } from 'react'
import { Outlet, Route, Router, Routes } from 'react-router'
import ExampesList from './ExampesList'
import Exampleone from './Exampleone'
import ExampleTwo from './ExampleTwo'
import ExampleThree from './ExampleThree'
import ExampleFour from '../ExampleFour'

export default class Exampless extends Component {
    render() {
        return (
            <Routes>
                <Route path='/' element={<ExampesList />}>
                    <Route path='exampleone' element={<Exampleone />}></Route>
                    <Route path='exampletwo' element={<ExampleTwo />}></Route>
                    <Route path='examplethree' element={<ExampleThree />}></Route>
                    <Route path='examplefour' element={<ExampleFour />
                }></Route>
                </Route>
            </Routes>
        )
    }
}
