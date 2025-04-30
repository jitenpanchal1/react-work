import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [color, setcolor] = useState("light")

  useEffect(() => {
    const savedata = localStorage.getItem("mode")
    if (savedata) {
      setcolor(savedata)
    }
  }, [])

  const Change = () => {
    const Newcolor = color === "light" ? "dark" : "light";
    setcolor(Newcolor)
    localStorage.setItem("mode", Newcolor)
  }

  return (
    <>
      <div className={`ui ${color}`}>
        <div className='btn'>
          <button
            onClick={Change}>
            click to change
          </button>
        </div>
      </div>
    </>
  )
}

export default App
