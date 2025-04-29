import React, { useCallback, useState } from 'react'
import Useme from './Context'
import Child from './Child'

export default function Usecontext() {

    const [count, setcount] = useState(0)
    const Update = useCallback(() => {
        setcount(count + 1)
    }, [count])

    return (
        <>
            <Useme.Provider value={{ count }}>
                <div>
                    <h1>this is call back</h1>
                </div>
                <div>
                    <h1><Child /></h1>
                </div>
                <div>
                    <button
                        onClick={Update}>
                        click to add count
                    </button>
                </div>
            </Useme.Provider>
        </>
    )
}
