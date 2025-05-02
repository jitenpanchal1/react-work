import React, { useContext, useState } from 'react'
import Data from './context'
import Basicbutton from './Basicbutton'


function Inputcontrolledcompo() {

    const [name, setname] = useState("")
    const [show, setshow] = useState("")
    const { color } = useContext(Data)

    const Change = (e) => {
        setname(e.target.value)
    }

    const click = () => {
        setshow(name)
    }

    return (
        <>
            <div className={` ${color}  h-100 container text-center`}>
                <div>
                    <h1>this is  the example of controlled component</h1>
                </div>
                <div>
                    <Basicbutton />
                </div>
                <div className='mt-5'>
                    <label htmlFor="name" className='me-2'> Enter your name </label>
                    <input type="text"
                        onChange={Change}
                        value={name} />
                </div>
                <div>
                    <input
                        className='mt-2'
                        type="submit"
                        value="submit"
                        onClick={click}
                    />
                </div>
                <div className='mt-5 underline'>
                    <h1> submit and see your name : {show}</h1>
                </div>
            </div>
        </>
    )
}

export default Inputcontrolledcompo
