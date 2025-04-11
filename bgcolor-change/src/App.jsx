import { useEffect, useState } from 'react'
import './App.css'

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {

  let [color, setcolor] = useState("cornflowerblue")

  let Getcolor = (bg) => {
    let coloritom = ["white"]
    return coloritom.includes(bg.toLowerCase()) ? "white" : bg;
  };

  return (
    <>
      <div className="vh-100"
        style={{ backgroundColor: color }}>
        <div className='textbg'>
          <h1
            style={{ color: Getcolor(color) }}> this is {color}
          </h1>
        </div>
        <div className='colorbox w-75 h-25 m-auto fixed-bottom p-5 square  rounded-pill d-flex justify-content-between align-items-center'>
          {/* dmjwcbnneun */}
          <button
            onClick={() => setcolor("red")}
            className='same red'> red
          </button>
          <button
            onClick={() => setcolor("yellow")}
            className='same yellow'> yellow
          </button>
          <button
            onClick={() => setcolor("yellowgreen")}
            className='same yellowgreen'> yellowgreen
          </button>
          <button
            onClick={() => setcolor("blueviolet")}
            className='same jambu'> jambu
          </button>
          <button
            onClick={() => setcolor("black")}
            className='same black'> black
          </button>
          <button
            onClick={() => setcolor("green")}
            className='same green'> green
          </button>

        </div>
      </div >
    </>
  )
}

export default App
