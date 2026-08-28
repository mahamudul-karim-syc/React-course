import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Shoping from './componets/Shoping'
import Counter from './componets/Counter'
import Profile from './componets/Profile'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Counter/>
  
   <Profile/>
   <Shoping/>
  </StrictMode>,
)
