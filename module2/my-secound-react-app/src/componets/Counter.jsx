import { useEffect, useState } from "react";
import Count from "./Count";
const Counter = () => {
        const [Counter,setCounter]=useState(0)
    useEffect(()=>{
        document.title='continer'
        console.log('use effect on inside')

    })
     console.log('use effect on outside')

    const counthendler=()=>{
      
        // setCounter(Counter+1)
        setCounter((privcounter)=>privcounter+1)
        setCounter((privcounter)=>privcounter+1)
        setCounter((privcounter)=>privcounter+1)
    }

   
    return (
        <div className="counter">
            {/* <h1>{Counter}</h1> */}
            <Count counter={Counter} setCounter={setCounter} />
            <button onClick={()=>counthendler()} className="btn-card">increment</button>
        </div>
    );
};

export default Counter;