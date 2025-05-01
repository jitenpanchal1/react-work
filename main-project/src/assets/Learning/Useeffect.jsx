import React from 'react'
import Fetchdata from './Fetchdata'


export default function Useeffect() {


    return (
        <>
            <div className='container'>
                <div>
                    <h1>Useefect is a asynchronimous hooks</h1>
                </div>
                <div>
                    <h1>mostly  use of fetching the data  when we mount the page  so useeffect work asynchronomouslly and fetching data in back ground</h1>
                </div>
                <div>
                    <Fetchdata />
                </div>
            </div>
        </>
    )
}
