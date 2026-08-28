import { useEffect, useRef, useState } from "react";
import Count from "./Count";



const Counter = () => {
  

    //type 3
    const[count,setCount]=useState(0)
    const renderCount=useRef(0)
      useEffect(() => {
  //  setRenderCount((prev) => prev + 1);
    renderCount.current = renderCount.current + 1;
  });

    // const randercount=useRef(0)
    // useEffect(()=>{
    //     randercount.current=randercount.current+1
    // })

      useEffect(()=>{
         document.title=`conunter:${count}`
          console.log('any uptade title best praactice ')
          
    },[count])
    // //type 2
    // useEffect(()=>{
    //      console.log(' 1 time run  hbe best practice api fromet ')
    // },[])
    // //type 1
    // useEffect(()=>{
    //     console.log("any time auto update hobe onk ber bed practife title change")
    // })
 

    const counterHendler=()=>{
        // setCount(count+1)
        //   setCount(count+1)
        //     setCount(count+1)
      setCount((prvescounter)=>(prvescounter+1))
      setCount((prvescounter)=>(prvescounter+1))
      setCount((prvescounter)=>(prvescounter+1))
    }

    return (
        <div>
            <h1>Count:{count}</h1>
               {/* <h2>render count: {renderCount.current}</h2> */}
            <Count count={count} setcount={setCount} />            
             <button onClick={()=> counterHendler()}>incrimet</button>
        </div>
    );
};

export default Counter;