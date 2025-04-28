import { useEffect, useState } from 'react'
import "./App.css"
import { MDBBtn } from 'mdb-react-ui-kit';


function App() {

  const [task, settask] = useState("")
  const [multitask, setmultitask] = useState([])

  useEffect(() => {
    const store = localStorage.getItem("multitask");
    if (store) {
      setmultitask(JSON.parse(store))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("multitask", JSON.stringify(multitask));
  }, [multitask])

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
      <div className='box bg-dark bg-gradient'>
        <div className='text-center'>
          <div className='mb-3'>
            <input
              className='w-75 p-1 border-0 bg-secondary rounded-2'
              type="text"
              value={task}
              onChange={(e) => settask(e.target.value)}
              placeholder='enter New task' />
            <MDBBtn
              className='me-1 ms-2 py-2 px-1 shadow-0'
              onClick={handleAdd}>
              click to add
            </MDBBtn>
          </div>
          <div>
            <ul className='list-unstyled'>
              {multitask.map((tas, index) => {
                return (
                  <>
                    <li className='stor d-flex bg-info justify-content-between mt-3 rounded-2' key={index}>
                      <input type="checkbox"
                        className='ms-3 p-3'
                        onChange={() => toggle(index)}
                        checked={tas.checked} />
                      <span className='pt-1'>{tas.text}</span>
                      <MDBBtn className='px-2 shadow-0 py-2' color='warning'
                        onClick={() => handledelet(index)}>
                        delet the task
                      </MDBBtn>
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
