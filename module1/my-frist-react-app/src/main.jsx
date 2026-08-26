import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Welcome from './Component/Welcome'
import Grating from './Component/Grating'
import Producats from './Component/Producats'
import Moodtracker from './Component/Moodtracker'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Welcome/>
   <Grating title={'Good Nighit'} name="Facebook" Logedinl={true}  massage={'thank you'}/>
   <Grating title={'Good Nighit'} name="Meta" Logedin={false}/>
  <Moodtracker/>
   <Producats/>
  </StrictMode>,
)
