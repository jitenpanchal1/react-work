import React, { useCallback, useEffect, useState } from 'react'
import Data from './context'

export default function Themechanger({ children }) {
    const [color, setcolor] = useState('light')

    useEffect(() => {
        const savechange = localStorage.getItem("mode")
        if (savechange) {
            setcolor(savechange)
        }
    }, [])

    const Changebg = useCallback(() => {
        const change = color === "light" ? "dark" : "light"
        setcolor(change)
        localStorage.setItem("mode", change)
    }, [color])

    return (
        <Data.Provider value={{ color, Changebg }}>
            {children}
        </Data.Provider>
    )
}
