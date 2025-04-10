import React, { Component } from 'react'
import { Link, Outlet } from 'react-router'

export default class ExampesList extends Component {
    render() {
        return (
            <div>
                <ul className='text-start'>
                    <li><Link to="exampleone"> Example One</Link></li>
                    <li><Link to="exampletwo"> Example Two</Link></li>
                    <li><Link to="examplethree"> Example Three</Link></li>
                    <li><Link to="examplefour"> Example Four</Link></li>
                </ul>
                <Outlet/>
            </div>
           
        )
    } 
}
