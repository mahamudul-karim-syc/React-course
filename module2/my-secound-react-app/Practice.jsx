import { useState } from "react";
import Practice2 from "./Practice2";

const Practice = () => {
    const [counter,setCounter]=useState(0)
    const counthendler=()=>{
       // setCounter(counter+1)
       setCounter((previcscounter)=>previcscounter+1)
         setCounter((previcscounter)=>previcscounter+1)
         setCounter((previcscounter)=>previcscounter+1)

    }
    return (
        <div className="practice-card">
        <Practice2 counter={counter} setCounter={setCounter}/>
        <button onClick={()=>counthendler()} >increment</button>

        </div>
    );
};

export default Practice;