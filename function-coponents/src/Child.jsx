import React from 'react'
import { useContext } from 'react'
import Useme from './Context'

function Child() {

    const { count } = useContext(Useme)

    return (
        <>
            <div>
                <h1> this is my count {count}</h1>
            </div>
        </>
    )
}

export default React.memo(Child)