import React, { useContext } from 'react'
import Data from '../Learning/context'
import Gradientusage from '../AnimationUsage/Gradientusage'
import Hyperspeedusage from '../AnimationUsage/Hyperspeedusage'


export default function Home() {

    const { color } = useContext(Data)
    return (
        <>
            <div className={`${color} text-center Home`}>
                <Hyperspeedusage />
                <div className='pt-5 col-8 mx-auto'>
                    <h1 className='mt-5'>
                        <Gradientusage />
                    </h1>
                </div>
                {/* <div>
                    <h1>this is home</h1>
                </div> */}
            </div >
        </>
    )
}
