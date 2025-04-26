import { useState } from 'react'

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {

  const [task, settask] = useState("")
  const [multitask, setmultitask] = useState([])

  const handleAdd = () => {
    if (task.trim()) {
      setmultitask([...multitask, { text: task, checked: false }])
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

  const toggle = (index) => {
    const status = multitask.map((item, i) => {
      if (index === i) {
        return { ...item, checked: !item.checked }
      }
      return item
    })
    setmultitask(status)
  }



  return (
    <>
      <div className=''>
        <div className='d-flex flex-column justify-content-center align-items-center'>
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
                      <input type="checkbox"
                        onChange={() => toggle(index)}
                        checked={tas.checked} />
                      {tas.text}
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
        </div>
      </div>

    </>
  )
}

export default App
