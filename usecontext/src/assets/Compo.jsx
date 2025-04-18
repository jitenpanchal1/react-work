import React, { useContext } from 'react'
import Usecontext from './Usecontextdata/Contaxt'

function Compo() {

    const value = useContext(Usecontext)
    return (
        <>
            <div>
                <h2>  i am compo {value.count}</h2>
            </div>
            <div>
                this is the basic usecontext example..
            </div>

        </>
    )
}

export default Compo
