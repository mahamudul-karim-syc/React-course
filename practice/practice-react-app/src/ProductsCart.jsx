import { useState } from "react";

const ProductsCart = ({pd}) => {
   const {name,price,isStock,description}=pd

   const addtocarthendler=(text,event)=>{
    // console.log(e)
    // console.log(event)
    event.target.textContent = "Added";
    event.target.style.backgroundColor='blue'
    alert(`Name: ${name} Event: ${text}`)

   
}
const bayhendler=(event)=>{
   // console.log(event)
    event.target.textContent = "Bayed";
    event.target.style.backgroundColor='red'
    alert(`${name} Baying sucssfully`)
}    
const [count,setCount]=useState(0)
console.log(count,setCount)
// console.log(isStock)
    return (
        <div className="producat-card">
            <h2>name:{name}</h2>
            <p>{description}</p>
            <h2>price:{price}</h2>
            <h3>{isStock?'is Stock':'not is Stock'}</h3>
            <button onClick={(event)=>addtocarthendler('add to cart',event)}>add to cart</button>
            <button onClick={bayhendler}>Bay now</button>
           <p>count:{count}</p>
           <button onClick={()=>setCount(count+1)}>incriment</button>
        </div>
    );
};

export default ProductsCart;
