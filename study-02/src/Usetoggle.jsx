import { useState } from 'react'
import './Usetoggle1.css'

function Toggle() {
    let [on, ison] = useState(true)

    let click = () => {
        ison(!on)
        console.log(on)
    }

    return (
        <>
            <div className={on ? "on" : "off"}>
                <p
                    >
                    hi there {on ? "on" : "off"}
                    <button  className='btn' 
                    onClick={click}>

                    </button>
                </p>
                <div>

                </div>
                <div className={on ? "on" : "off"}>
                    <button className='btn2'
                        onClick={click}>
                        </button>
                </div>
            </div>
        </>
    )
}

export default Toggle;