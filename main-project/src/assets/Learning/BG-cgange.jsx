import React, { useContext } from 'react'
import Data from './context'
import "../Css/App.css"
import Basicbutton from './Basicbutton'


function BGcgange() {

    const { color, Changebg } = useContext(Data)

    return (
        <div className={` ${color} container h-100 text-center`}>
            <div className='pt-5'>
                <h1> this is bg changer</h1>
            </div>
            <div>
                <Basicbutton />
            </div>
        </div>
    )
}

export default BGcgange
