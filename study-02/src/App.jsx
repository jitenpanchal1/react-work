import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toggle from './Usetoggle.jsx'

// let count = 0;



function App() {
  // let [count, up] = useState(0)

  // const updated = () => {
  //   console.log("increas", count)
  //   up(count + 1)
  // }

  // const decrease = () => {
  //   console.log("decrease", count)
  //   if (count > 0) {
  //     up(count - 1)
  //   } else {
  //     console.log("Count is already at 0, cannot decrease further")
  //   }
  // }

  return (
    <>
      {/* <h1>studddy 02</h1>
      <div>
        <button onClick={updated}>
          upadte : {count}
        </button>
      </div>
      <div>
        <button onClick={decrease}>
          decreas : {count}
        </button>
      </div> */}

      <Toggle />
    </>
  )
}

export default App
