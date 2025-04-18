import { useState } from 'react'

import './App.css'
import Narvar from './assets/Usecontextdata/Narvar'
import Usecontext from './assets/Usecontextdata/Contaxt'

function App() {
  const [count, setCount] = useState(0)

  let Update = () => {
    setCount(count + 1)
  }

  return (
    <Usecontext.Provider value={{ count, setCount, Update}}>
      <Narvar />
      <button onClick={Update}>
        count is {count}
      </button>
    </Usecontext.Provider>
  )
}

export default App
