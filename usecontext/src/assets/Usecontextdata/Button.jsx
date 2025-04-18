import React, { useContext } from 'react'
import Compo from '../compo'
import Usecontext from './Contaxt'

function Button() {

    const value = useContext(Usecontext)
    
    return (
        <div>
            <button
                onClick={value.Update}><span><Compo /></span>
            </button>
        </div>
    )
}

export default Button
