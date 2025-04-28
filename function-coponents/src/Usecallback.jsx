import React, { useCallback, useState } from 'react'
import Childforeusecallback from './Childforeusecallback'

export default function Usecallback() {

    const [count, setcount] = useState(0)
    const [item, setitem] = useState(0)

    const Updatecnt = () => {
        setcount(count + 1)
    }

    const Updateitm = useCallback(() => {
        setitem(item + 1)
    }, [item])

    return (
        <>
            <div className='text-center'>
                <div>
                    <h1>when we add and upgrate the childcompo value through partent compo at this time we use usecallback hook to prevent unnessesurrly re-renderring the child compo</h1>
                </div>
                <div><Childforeusecallback item={item} up={Updateitm} /> </div>
                <div>
                    <h1>count : {count}</h1>
                </div>
                <div>
                    <button
                        onClick={Updatecnt}>
                        click to update count
                    </button>
                </div>
            </div>
        </>
    )
}
