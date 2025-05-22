import React from 'react'
import Hyperspeed from "../Animation/Hyperspeed";
import GradientText from '../Animation/GradientText';



function Hyperspeedusage() {
    return (
        // the component will fill the height/width of its parent container, edit the CSS to change this
        // the options below are the default values
        <>
            <Hyperspeed
                effectOptions={{
                    onSpeedUp: () => { },
                    onSlowDown: () => { },
                    distortion: 'turbulentDistortion',
                    length: 300,
                    roadWidth: 20,
                    islandWidth: 1,
                    lanesPerRoad: 6,
                    fov: 90,
                    fovSpeedUp: 150,
                    speedUp: 4,
                    carLightsFade: 0.6,
                    totalSideLightSticks: 20,
                    lightPairsPerRoadWay: 40,
                    shoulderLinesWidthPercentage: 0.05,
                    brokenLinesWidthPercentage: 0.2,
                    brokenLinesLengthPercentage: 0.5,
                    lightStickWidth: [0.12, 0.5],
                    lightStickHeight: [1.3, 1.7],
                    movingAwaySpeed: [60, 80],
                    movingCloserSpeed: [-120, -160],
                    carLightsLength: [400 * 0.03, 400 * 0.2],
                    carLightsRadius: [0.05, 0.14],
                    carWidthPercentage: [0.3, 0.5],
                    carShiftX: [-0.8, 0.8],
                    carFloorSeparation: [0, 5],
                    colors: {
                        roadColor: 0x080808,
                        islandColor: 0x0a0a0aa,
                        background: 0x00000,
                        shoulderLines: 0xFFFFFF,
                        brokenLines: 0xFFFFFF,
                        leftCars: [0xD856BFA, 0x6750A2A, 0xC247AC],
                        rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                        sticks: 0x03B3C3,
                    }
                }}
            />
        </>
    )
}

export default Hyperspeedusage
