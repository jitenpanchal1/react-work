import React, { useState } from 'react'
import Contact from './contaxr'
import './App.css'

function Context({ children }) {

    const [color, setcolor] = useState("light")

    const toggle = () => {
        if (color === "light") {
            setcolor("dark")
        } else {
            setcolor("light")
        }
    }
    return (
        <>
            <Contact.Provider value={{ color, toggle }}>
                <div>
                    {children}
                </div>
            </Contact.Provider>
        </>
    )
}

export default Context
