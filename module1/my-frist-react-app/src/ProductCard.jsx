//const ProductCard = ({name,price,isStock}) => {

import { useState } from "react";

const ProductCard = ({ product }) => {
  const { name,price,isStock } = product;
 // console.log(name,"name");
const [isAddtoCart,setIsAddtocart]=useState(false)

 const AddtoCardHandler=(e)=>{
 //console.log(e,"e")
//  e.target.textContent="Cliked"
//  e.target.style.backgroundColor='red'
 setIsAddtocart(isAddtoCart ? false : true)
  setIsAddtocart(!isAddtoCart)

  console.log(`${name} add to cart confrom `)
  alert(`${name} add to cart`)

 }
  const BayNowtoHandler=(e)=>{
   
    e.target.textContent='Baying'
     e.target.style.backgroundColor='blue'
  console.log(`${name} Bay now `)


 }

//  const count=useState(0)
//  console.log(count)

 const [count,setCount]=useState(0)
 console.log(count,setCount,'Hook')

 

  return (
    <div className="product-detals-card">
     <h2>name:{name}</h2>
     <h2>price:{price}</h2>
     <h2>{isStock ? "Avilable":"Not avilable"}</h2>
     {/* <button onClick={()=>console.log('add to card')}>add to card</button>
     <button onClick={()=>console.log('by now')}>bay now</button>
     <button onClick={()=>AddtoCardHandler("jodi kicu parai thole referfunction dibo na hobe dibo na")}>add to card</button>
    <button onClick={(event)=>AddtoCardHandler(event)}>add to card</button> */}
     <button onClick={AddtoCardHandler} className={`${isAddtoCart ? "add-to-cart":'add-to-cart-added'}`}>{isAddtoCart ? "Added" 
     :"add to card"}</button>

     <button onClick={(event)=>BayNowtoHandler(event)}>bay now</button>
     <h1>count: {count}</h1>
     <button onClick={()=>setCount(count+1)}> Add to count</button>
    </div>
  );
};

export default ProductCard;