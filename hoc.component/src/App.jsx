import { useState } from 'react'
import './App.css'
import Userlist from './Userlist'
import { createBrowserRouter } from 'react-router'
import Heade from './Heade'
import Home from './Home'
import Userid from './Userid'
import Username from './Username'
import Usertitle from './Usertitle'


const App = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Heade />
      <Home />
    </>
  }, {
    path: "/userid",
    element: <>
      <Heade />
      <Userid />
    </>
  }, {
    path: "/username",
    element: <>
      <Heade />
      <Username />
    </>
  }, {
    path: "/usertitle",
    element: <>
      <Heade />
      <Usertitle />
    </>
  }, {
    path: "/userlist",
    element: <>
      <Heade />
      <Userlist />
    </>
  }
])
// function App() {


//   return (
//     <>
//       <div className='Dta'>
//         <Userlist />
//       </div>
//     </>
//   )
// }

export default App
