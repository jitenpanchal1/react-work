import { useState } from 'react'


function App() {

  const [task, settask] = useState("")
  const [multitask, setmultitask] = useState([])

  const handleAdd = () => {
    if (task.trim()) {
      setmultitask([...multitask, task])
      settask("")
    }
  }

  const handledelet = (index) => {
    const Update = multitask.filter((task, i) => {
      if (index === i) {
        return false
      } else {
        return true
      }
    })
    setmultitask(Update)
  }



  return (
    <>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => settask(e.target.value)}
          placeholder='enter New task' />
        <button
          onClick={handleAdd}>
          click to add
        </button>
      </div>
      <div>
        <ul>
          {multitask.map((tas, index) => {
            return (
              <>
                <li key={index}>
                  {tas}
                  <button
                    onClick={() => handledelet(index)}>
                    delet the task
                  </button>
                </li>
              </>
            )
          }
          )}
        </ul>
      </div>

    </>
  )
}

export default App
