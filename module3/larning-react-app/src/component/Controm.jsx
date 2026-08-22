
// const Controm = () => {

import { useState } from "react";

//     const submitholder=()=>{
//         const value=document.getElementById('input-text').value
//         console.log(value)
//     }
//     return (
//         <div>
//             <h1> hello welcome</h1>
//             <input id="input-text" type="text" placeholder="Your Name"></input>
//             <button onClick={submitholder}>submit</button>
            
//         </div>
//     );
// };

// export default Controm;


const Controm = () => {
    const [name,setName]=useState("")
    const submitbutton=()=>{
        alert(`${name} is added`)
    }
    return (
        <div>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Your Name" />
            <p>Name {name}</p>
            <button onClick={submitbutton}>submit</button>
        </div>
    );
};

export default Controm;