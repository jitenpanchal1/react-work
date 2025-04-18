import React, { useContext } from 'react'
import Compo from '../compo'
import Usecontext from './Contaxt'

function Button() {

    const value = useContext(Usecontext)

    let Update = () => {
        value.setCount(value.count + 1)
    }
    return (
        <div>
            <button
                onClick={Update}><span><Compo /></span>
            </button>
        </div>
    )
}

export default Button
