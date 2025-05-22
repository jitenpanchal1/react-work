import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, incrementByAmount } from "../refuxfeature/Counterslice"


function Readuxcounter() {

    const [nam, setnam] = useState(null)
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const Addmore = () => {
        dispatch(incrementByAmount(nam))
        setnam(0)
    }

    return (
        <>
            <div className='text-center pt-5'>
                <div className='mt-5'>
                    <div className='my-5'>
                        <div>
                            <h1>
                                this is basic example of redux toolkit using this tool kit can manage state very easily  this is advance version of usereducer hook.
                            </h1>
                        </div>
                        <h1>
                            this is count {count}
                        </h1>
                        <div>
                            <button
                                onClick={() => dispatch(increment())}>
                                click to add
                            </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>
                                this is example of action.payload
                            </h1>
                        </div>
                        <input
                            type="number"
                            value={nam}
                            onChange={(e) => setnam(e.target.value)} />
                        <button
                            onClick={Addmore}>
                            click to add in count
                        </button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Readuxcounter
