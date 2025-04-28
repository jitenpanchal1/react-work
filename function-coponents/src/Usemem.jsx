import React, { useMemo, useState } from 'react'


export default function Usemem() {

    const [count, setcount] = useState(0)
    const [item, setitem] = useState(10)

    const update = () => {
        setcount(count + 1)
    }

    const updatetwo = () => {
        setitem(item + 1)
    }

    const Call = useMemo(() => {
        console.log("hi i am rendering")
        console.log(item)
    }, [item])

    return (
        <>
            <div className='text-center'>
                <div>
                    <h1> this is count {count}</h1>
                    <h1> this is item {item}</h1>
                </div>
                <div>
                    <button
                        onClick={update}>
                        click to update count
                    </button>
                    <button
                        onClick={updatetwo}>
                        click to update item
                    </button>
                </div>
            </div>
        </>
    )
}