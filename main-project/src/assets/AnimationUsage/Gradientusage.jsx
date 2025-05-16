import React from 'react'
import GradientText from '../Animation/GradientText'

function Gradientusage() {
    return (
        <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={8}
            showBorder={false}
            className="custom-class"
        >
            "I'm a front-end developer specializing in translating designs into interactive and engaging websites"
        </GradientText>
    )
}

export default Gradientusage
