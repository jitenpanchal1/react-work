import React, { useState } from 'react'


function Inputcontrolledcompo() {

    const [name, setname] = useState("")
    const [show, setshow] = useState("")

    const Change = (e) => {
        setname(e.target.value)
    }

    const click = () => {
        setshow(name)
    }

    return (
        <>
            <div className={`text-center pt-5 h-100`}>
                <div>
                    <h1>
                        this is  the example of controlled component.
                    </h1>
                    <h2 className='mt-3'>
                        This controled compo use for handle the input value this compo handle by react js more use than uncontrolled compo.
                    </h2>
                </div>
                <div>
                    {/* <Basicbutton /> */}
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