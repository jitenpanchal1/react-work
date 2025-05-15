import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router'
import "../Css/App.css"
import Data from './context'



function Learning() {

    const { color } = useContext(Data)

    return (

        <div>
            <div className='d-flex justify-content-between'>
                <div className='bg-secondary col-2 sm-col-3'>
                    <div className='child-link'>
                        <div className='text-center my-2'>
                            <h1>React work</h1>
                        </div>
                        <ol>
                            <li className='my-2'><Link to="usestate">Usestate</Link></li>
                            <li className='my-2'><Link to="useeffect">UseEffect</Link></li>
                            <li className='my-2'><Link to="usecontext">Usecontext</Link></li>
                            <li className='my-2'><Link to="input">Input-controll-compo</Link></li>
                            <li className='my-2'><Link to="hoc">Hoc</Link></li>
                            <li className='my-2'><Link to="usereduce">Usereducer</Link></li>
                            <li className='my-2'><Link to="useref">UseRef</Link></li>
                            <li className='my-2'><Link to="custom">Customhook</Link></li>
                            <li className='my-2'><Link to="navigation">Usenavigation</Link></li>
                            <li className='my-2'><Link to="theme">theme-changer</Link></li>
                            <li className='my-2'><Link to="todolist">To-Do list</Link></li>
                            <li className='my-2'><Link to="password">Password-Generator</Link></li>
                            <li className='my-2'><Link to="adddata">Addata</Link></li>
                            {/* <li className='my-2'><Link to="showdata">Showdata</Link></li> */}
                            <li className='my-2'><Link to="redux">Redux-toolkit</Link>
                                <ol>
                                    <li><Link to="reduxtodo">Redux To-do list</Link></li>
                                </ol>
                            </li>
                            {/* <li className='my-2'><Link to="usestate">Api fetch</Link></li> */}
                        </ol>
                    </div>
                </div>
                <div className={`${color} col-10 sm-col-9 `}>
                    <Outlet />
                </div>
            </div>
        </div >

    )
}

export default Learning
