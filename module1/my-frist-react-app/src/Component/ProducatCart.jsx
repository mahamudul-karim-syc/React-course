// const ProducatCart = (props) => {

import { useState } from "react";

//     const {title,price,IsStock}=props
//     return (
//         <div className="producat-cart">
//             <h1>Title:{title}</h1>
//             <h1>Price:{price}</h1>
//             <h2>{IsStock?"Is avilable":"Not avilable"}</h2>
//         </div>
//     );
// };

// export default ProducatCart;



const ProducatCart = ({product}) => {
    const {title,price,stock}=product
    
  const [addedtocart,setAddedtocart]=useState(false)

    const addtocart=(text,event)=>{
        // event.target.textContent='added'
        // event.target.style.backgroundColor = 'red';
        setAddedtocart(addedtocart ? false:true)
        // setAddedtocart(!addedtocart) 
        alert(`Name:${title} Event:${text}`)
        console.log(event)
    }
    const Bayhendler=(event)=>{
          event.target.textContent='bayinged'
         event.target.style.backgroundColor = 'red';
        alert(`{title} baying sucssfully`)

    }
    const [count,setCount]=useState(0)
    console.log(count,setCount)
   


    return (
        <div>
             <div className="producat-cart">
             <h1>Title:{title}</h1>
             <h1>Price:{price}</h1>
             <h2>{stock?"Is avilable":"Not avilable"}</h2>
             {/* <button onClick={(event)=>addtocart('add to cart',event)}>add to cart</button> */}
             <button onClick={Bayhendler}>Bay Now</button>
             <p>count: {count}</p>
             <button onClick={()=>setCount(count+1)}>incrimet</button>
            <button className={`${addedtocart? 'add-to-cart':'added-to-cart'}`} onClick={(event)=>addtocart('add to cart',event)}>{addedtocart ? 'added':"add to cart"}</button>

         </div>
        </div>
    );
};

export default ProducatCart;