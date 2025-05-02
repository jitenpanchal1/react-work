import React from 'react'
import { Link, Outlet } from 'react-router'
import "../Css/App.css"


function Learning() {
    return (

        <div>
            <div className='d-flex justify-content-between'>
                <div className='child-link bg-secondary col-2 sm-col-3'>
                    <div className='text-center'>
                        <h1>React work</h1>
                    </div>
                    <div >

                        <ul>
                            <li><Link to="usestate">Usestate</Link></li>
                            <li><Link to="useeffect">UseEffect</Link></li>
                            <li><Link to="usecontext">Usecontext</Link></li>
                            <li><Link to="input">Input-controll-compo</Link></li>
                            <li><Link to="usestate">Hoc</Link></li>
                            <li><Link to="theme">theme-changer</Link></li>
                            <li><Link to="todolist">To-Do list</Link></li>
                            <li><Link to="usestate">Api fetch</Link></li>
                        </ul>

                    </div>
                </div>
                <div className='col-10 sm-col-9'>
                    <Outlet />
                </div>
            </div>
        </div>

    )
}

export default Learning
