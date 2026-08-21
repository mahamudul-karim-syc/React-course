import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Grating from './componets/Grating.jsx'
import PropsDataPassing from './componets/PropsDataPassing.jsx'
//import ProductCard from './ProductCard.jsx'
import Product from './Product.jsx'
//import Condition from './componets/Condition.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Grating/>
    <PropsDataPassing title={"Good Morning"} name={"karim"} loggedIn={true}/>
     <PropsDataPassing title={"Good evining"} name={"mahamudul"} loggedIn={true} spasialmassage={"you are logind right now"}/>
{/*   
  
    <Condition title={"Good Morning"} name={"karim"} loggedIn={true}/>
    <Condition title={"Good evining"} name={"mahamudul"} loggedIn={true} spasialmassage={"you are logind right now"}/>

    {/* <Prodact/>
    <Prodact/> */}
    
    <Product/>

  </StrictMode>,
)
