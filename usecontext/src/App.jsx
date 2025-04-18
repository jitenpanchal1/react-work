import { useState } from 'react'

import './App.css'
import Narvar from './assets/Usecontextdata/Narvar'
import Usecontext from './assets/Usecontextdata/Contaxt'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Usecontext.Provider value={{ count, setCount }}>
      <Narvar />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>  
    </Usecontext.Provider>
  )
}

export default App
