import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Producat from './Producat'
import Weclome from './Weclome'
// import Grating from './Grating'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Weclome/>
    <Producat/>
  
    {/* <Grating grating={'Good morning'}name={"phitron"} IsLogedin={true} massage={" Welcome to my website "}/>
     <Grating grating={'Good morning'} IsLogedin={true} massage={" Welcome to my website "}/>
      
     <Grating title={'laptop'}price={550000}isStock={true}/> */}
  </StrictMode>
)
