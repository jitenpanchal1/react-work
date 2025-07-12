import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Add } from './reduxfolder/reduxfeature/Addproductslice'


function App() {

  const dispatch = useDispatch()

  const [name, setname] = useState("")
  const [price, setprice] = useState(0)
  const [catogery, setcatogery] = useState("")

  const submit = (e) => {
    e.preventDefault()
    dispatch(Add())
  }


  return (
    <>
      <div>
        <form onSubmit={submit}>
          <div>
            <label htmlFor="name">Enter Product name :</label>
            <input id='name' type="text" value={name} onChange={(e) => setname(e.target.value)} />
          </div>
          <div>
            <label htmlFor="price">Enter your price :</label>
            <input id='price' type="number" value={price} onChange={(e) => setprice(e.target.value)} />
          </div>
          <div>
            <label htmlFor="cat">Catogery :</label>
            <input id='cat' type="text" value={catogery} onChange={(e) => setcatogery(e.target.value)} />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </>
  )
}

export default App
