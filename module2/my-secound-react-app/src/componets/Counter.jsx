import { useState } from "react";
import Count from "./Count";

const Counter = () => {
    const [count,setCount]=useState(0)
    const addtocount=()=>{
    setCount((prvcount)=>(prvcount+1))
    setCount((prvcount)=>(prvcount+1))   
    setCount((prvcount)=>(prvcount+1)) 
    }
    return (
        <div className="list">
            <h2>count{count}</h2>
            <Count count={count} setcount={setCount}/>
            {/* <button onClick={()=>setCount(count+1)}>incriment</button> */}
             <button onClick={addtocount}>incriment</button>
        </div>
    );
};

export default Counter;