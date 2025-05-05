import React, { useReducer } from 'react'

const init = 0

function reducer(state, action) {
    switch (action.type) {
        case "plus": return state + 1
        case "minus": return state - 1
        default: return state = 0
    }
}

export default function Usereducer() {
    const [count, dispatch] = useReducer(reducer, init)
    return (
        <>
            <div>
                <div>
                    <h1>
                        This hook is alternative of usestate to use this hook we can store multiple functionality in one function.
                    </h1>
                </div>
                <div className='my-5'>
                    <h1>
                        this is my count : {count}
                    </h1>
                </div>
                <div>
                    <button
                        onClick={() => dispatch({ type: "plus" })}>
                        click
                    </button>
                </div>
            </div>
        </>
    )
}
