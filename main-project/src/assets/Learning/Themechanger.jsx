import React, { useCallback, useEffect, useState } from 'react'
import Data from './context'

export default function Themechanger({ children }) {

    const [color, setcolor] = useState('light')

    const [todo, settodo] = useState("")
    const [multi, setmulti] = useState([])

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

    useEffect(() => {
        const saved = localStorage.getItem("list")
        setmulti(JSON.parse(saved))
    }, [])

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(multi))
    }, [multi])

    const Addlist = useCallback(() => {
        if (todo.trim()) {
            const save = [...multi, { text: todo }]
            setmulti(save)
            settodo("")
            console.log("data")
        }
    }, [todo])

    const Dletbtn = useCallback((index) => {
        const delet = multi.filter((item, i) => {
            if (index === i) {
                return false
            } else {
                return true
            }
        })
        setmulti(delet)
    }, [])



    return (
        <Data.Provider value={{ color, Changebg, todo, Addlist, settodo, multi, Dletbtn }}>
            {children}
        </Data.Provider>
    )
}
