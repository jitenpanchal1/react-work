import React from 'react'
import "../Css/App.css"

function BGcgange() {

    return (
        <div className={` h-100`}>
            <div className='text-center'>
                <div className='pt-5'>
                    <h1> this is bg changer</h1>
                </div>
                <div className='mb-5'>
                    {/* <Basicbutton /> */}
                </div>
                <div>
                    <h1>
                        In this bg change we use usecallback hook to prevent uanasacerly re-rendering  any functionality and we also use react.memo to prevent uanasacerly re-rendering any functions state and valu
                    </h1>
                </div>
                <div className='mt-5'>
                    <h1>
                        Here we also use local storage to store the bg color after clicking if i refresh but bg color not change because this color is stored in local storage to see the store.
                    </h1>
                </div>
            </div>
            <div className='mt-5'>
                <ul>
                    <li className='fs-1'>To see stored Data</li>
                </ul>
                <ol className='ms-3 '>
                    <li className='fs-2'>Open developer tool in browser</li>
                    <li className='fs-2'>Go to Application button</li>
                    <li className='fs-2'>And click local storage to see see the data</li>
                </ol>
            </div>
        </div>
    )
}

export default React.memo(BGcgange)
