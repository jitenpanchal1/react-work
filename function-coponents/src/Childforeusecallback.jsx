import React from 'react'

function Childforeusecallback({ item, up }) {
    console.log("i am children and i an rendering")
    return (
        <>
            <div>
                <h1> this is my item number {item}</h1>
            </div>
            <div>
                <button
                    onClick={up}>
                    clickto aad item
                </button>
            </div>
        </>
    )
}

export default React.memo(Childforeusecallback)
// export default Childforeusecallback