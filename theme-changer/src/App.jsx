import { useContext, useState } from 'react'

import './App.css'
import Contact from './contaxr'
import Othercount from './Othercount'

function App() {

  const { color, toggle } = useContext(Contact)

  return (
    <>
      {/* <div>
        <h1>This is my count {count}</h1>
      </div>
      <div>
        <button
          onClick={update}>
          click to update count
        </button>
      </div> */}


      <div>

        <div
          className={`ui ${color}`}>
          <h1>dfhwfwtgdyqgug</h1>
          <div>
            <Othercount />
          </div>
        </div>



      </div>
    </>
  )
}

export default App
