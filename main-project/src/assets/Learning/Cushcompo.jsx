import React from 'react'
import ustomhook from './Customhook'

export default function Cushcompo() {

    const int = ustomhook()
    return (

        <>
            <div className='text-center'>
                <div>
                    <h1> 
                         when we have to use reapited logic,stste,function etc at tha
                    </h1>
                </div>
                <div>
                    <h1>
                        this is my count  {int.count}
                    </h1>
                </div>
                <div>
                    <button
                        onClick={int.Hndle}>
                        clickme
                    </button>
                </div>
            </div>
        </>

    )
}
