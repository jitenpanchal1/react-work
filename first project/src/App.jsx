import { useState } from 'react'

import Prompt from './Prompt'
import Name1 from './Prompt'
import Name2 from './Prompt'
import Name3 from './Prompt'

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import Spline from "@splinetool/react-spline";
/*spline link*/

import Prompt2 from './Prompt2'

import Doc1 from './Prompt2'
import Img1 from './assets/Img-1-cart.jpg'
import Title1 from './Prompt2'


import Doc2 from './Prompt2'
import Img2 from './assets/Img-2-cart.webp'
import Title2 from './Prompt2'


import Doc3 from './Prompt2'
import Img3 from './assets/Img-3-cart.jpg'
import Title3 from './Prompt2'


import Doc4 from './Prompt2'
import Img4 from './assets/Img-4-cart.webp'
import Title4 from './Prompt2'


import Doc5 from './Prompt2'
import Img5 from './assets/Img-5-cart.jpg'
import Title5 from './Prompt2'

import Home from './Spline'



function App() {

  return (
    <>
      {/* <Prompt
        Name1={'jeeten'} Name2={'harnish'} Name3={'Jaadu'} /> */}
      <Home />
      <Prompt2 Doc1={Img1} Doc2={Img2} Doc3={Img3} Doc4={Img4} Doc5={Img5}
        Title1={"Imagic Park"} Title2={"Roller Coster"} Title3={"Imagic Park 2"} Title4={"Marvels Heroes"} Title5={"Evening Beach"} />
    </>
  )
}

export default App
