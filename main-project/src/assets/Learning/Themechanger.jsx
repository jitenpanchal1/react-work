import React, { useCallback, useEffect, useState } from 'react'
import Data from './context'

function Themechanger({ children }) {

    const [color, setcolor] = useState(() => {
        return localStorage.getItem("mode") || ("light")
    })

    const [todo, settodo] = useState("")
    const [multi, setmulti] = useState([])

    const [context, setcontext] = useState(0)

    const Update = () => {
        setcontext(context + 1)
        console.log("context update")
    }


    const Changebg = () => {
        const change = color === "light" ? "dark" : "light"
        setcolor(change)
        localStorage.setItem("mode", change)
        console.log("change bg")
    }

    useEffect(() => {
        const saved = localStorage.getItem("list")
        setmulti(JSON.parse(saved))
    }, [])

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(multi))
    }, [multi])

    const Addlist = () => {
        if (todo.trim()) {
            const save = [...multi, { text: todo }]
            setmulti(save)
            settodo("")
        }
        console.log("addlist")
    }

    const Dletbtn = (index) => {
        const delet = multi.filter((item, i) => {
            if (index === i) {
                return false
            } else {
                return true
            }
        })
        setmulti(delet)
        console.log("delet")
    }

    return (
        <Data.Provider value={{ color, Changebg, todo, Addlist, settodo, multi, Dletbtn, context, Update }}>
            {children}
        </Data.Provider>
    )
}

export default React.memo(Themechanger)
