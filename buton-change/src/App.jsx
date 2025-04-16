import { useState } from 'react'

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import Pro from './Prompt';

import Button from './Togglebuttonprops';


import Spline from "@splinetool/react-spline";

function App() {

  let [isdidsavle, setdisable] = useState(false)

  function Toogle() {
    setdisable(!isdidsavle)
  }

  return (
    <>
      <Pr
      o NmeOne='jeeten' NmeTwo='jeeten2' NmeThree='Jeeten3' NmeFour='Jeeten4' NmeFive='jrrten5' />
      <Button disabled={isdidsavle} />
      <button onClick={Toogle}>
        click to active and disable
      </button>
    </>
  )
}

export default App
