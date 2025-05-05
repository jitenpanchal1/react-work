import React from 'react'
import Hoccompo from './Hoccompo'

function Seehoccompo({ count, Add }) {
    return (
        <>
            <div>

                <div>
                    <h1>This is a basic exmple of <b>High order component</b></h1>
                    <h3>when we hav use any one functionality again and again that time we use hoc compo</h3>
                </div>
                <div>
                    <h1> this is my count : {count}</h1>
                </div>
                <div>
                    <button
                        onClick={Add}>
                        click to add
                    </button>
                </div>
            </div>
        </>
    )
}

export default Hoccompo(Seehoccompo)
