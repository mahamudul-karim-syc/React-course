import { useState } from "react";

const Singin = () => {
    const [name,setName]=useState("")
     const [email,setEmail]=useState("")
      const [password,setPassword]=useState("")
      const [error,setError]=useState({})


    const SubmitHendler=(e)=>{
        e.preventDefault();
        const newerroer={};
        if (!name.trim()){
            newerroer.name='Name is requierd'
        }
        if(!email.trim()){
            newerroer.email='Email is requierd'
        }
         if(password.length <6){
            newerroer.password='password must be 6 digit'
        }
        setError(newerroer)
        if (Object.keys(newerroer).length>0) return
        console.log ('submited',{name,email,password})
    }
    return (
        <div>
            <form onSubmit={SubmitHendler}>
                <label>
                    Name 
                    <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Your Name" />
                    {error.name && <p style={{color:'red'}}>{error.name}</p>}
                </label> 
                <br/>
                 <label>
                    Email
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Your Email" />
                 {error.email && <p style={{color:'red'}}>{error.email}</p>}
                </label> 
                <br/>
                 <label>
                    Password
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Your Password" />
                     {error.password && <p style={{color:"red"}}>{error.password}</p>}
                </label> 
                <br/>
                 <button type="submit">Singin</button>
            </form>
        </div>
    );
};

export default Singin;
