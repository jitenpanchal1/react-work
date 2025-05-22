import React, { useContext } from 'react'
import Data from '../Learning/context'
import Hyperspeedusage from '../AnimationUsage/Hyperspeedusage'
import GradientText from '../Animation/GradientText'
import "../Css/App.css"

export default function Contact() {

    const { color } = useContext(Data)
    return (
        <>

            <div className={`${color} contact  text-center `}>
                <Hyperspeedusage />
                <div className='position'>
                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={8}
                        showBorder={false}
                        className="custom-class"
                    >
                        <div>
                            <h1>my name is jeeten</h1>
                        </div>
                        <div>
                            <h2>mobile number</h2>
                            <h2>this is my email id</h2>
                            <h2>this is my linkid</h2>
                            <h2> insta acount</h2>
                        </div>
                    </GradientText>

                </div>
            </div>
        </>
    )
}
