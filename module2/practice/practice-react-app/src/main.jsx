import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import User from './User'
// import Counter from './components/Counter'
// import Profile from './components/Profile'
// import Shoping from './components/Shoping'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    {/* <Counter/> */}
     <User/>
    {/* <Profile/> */}
    {/* <Shoping/> */}
  </StrictMode>,
)
