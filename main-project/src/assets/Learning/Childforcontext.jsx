import React, { useState } from 'react'
import Data from './context'
import Usecontext from './Usecontext'


function Childforcontext() {

    const [context, setcontext] = useState(0)

    const Update = () => {
        setcontext(context + 1)
    }

    return (
        <>
            <Data.Provider value={{ context, Update }}>
                <Usecontext />
                <div >
                    <div>
                        <h1>count for other compo {context}</h1>
                    </div>
                </div>
            </Data.Provider>
        </>
    )
}

export default React.memo(Childforcontext)
