import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Uncontrol from './Components/Uncontrol'
// import Control from './Components/Control'
import Signup from './Components/Signup'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Uncontrol/> */}
    {/* <Control/> */}
    <Signup/>
  </StrictMode>,
)
