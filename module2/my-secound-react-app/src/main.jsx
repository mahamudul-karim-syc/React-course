import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Shoping from './componets/Shoping'
import Counter from './componets/counter'
// import Profile from './componets/Profile'
//import Practice from '../Practice'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Counter/>
   {/* <Practice/> */}
   {/* <Profile/> */}
   {/* <Shoping/> */}
  </StrictMode>,
)
