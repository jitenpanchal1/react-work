import React, { useContext } from 'react'
import Contact from './contaxr'

export default function Othercount() {
    const { color, toggle } = useContext(Contact)
    return (
        <>
            <div>
                <button
                    onClick={toggle}>
                    click to switch theme
                </button>
            </div>
        </>
    )
}
