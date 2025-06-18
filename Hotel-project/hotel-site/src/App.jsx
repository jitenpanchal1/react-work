import React from 'react'
import Header from './component/Header'
import Home from './component/Home'
import Menu from './component/Menu'
import Contact from './component/Contact'
import About from './component/About'
import REservation from './component/REservation'
import Ourfamous from './component/Ourfamous'
import Event from './component/Event'


function App() {
    return (
        <>
            {/* <div className='container'> */}
            <Header />
            <Home />
            <Ourfamous />
            <Event />
            <Menu />
            <Contact />
            <About />
            <REservation />
            {/* </div> */}
        </>
    )
}

export default App
