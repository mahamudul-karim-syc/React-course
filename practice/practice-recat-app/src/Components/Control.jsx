import { useState } from "react";


const Control = () => {
    const [name,setName]=useState("")
    // console.log(name)
   const submithendler=()=>{
    alert(`${name} is submited`)
    }

    return (
        <div>
            <input value={name} onChange={(event)=>setName(event.target.value)} type="text" placeholder="Enter Your Name" />
            <p>Name : {name}</p>
            <button onClick={submithendler}>submit</button>
        </div>
    );
};

export default Control;