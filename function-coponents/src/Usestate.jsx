import React from 'react'
import { useState } from 'react'

export default function Usestate() {


    const [count, setcount] = useState(0)

    const update = () => {
        setcount(count + 1)
    }
    return (
        <>
            <div className='container text-center'>
                <div>
                    <h2>
                        what is hooks
                    </h2>
                    <h2>
                        in react hooks are the function that alows developer to use state and react other features using function component in react, without use class component.
                    </h2>
                </div>
                <div>
                    <h2> this is count {count}</h2>
                    <button
                        onClick={update}>
                        Update the value
                    </button>
                </div>
            </div>
        </>
    )
}
