import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const [errors,setErrors] = useState("");

 
  const SignupHendler = (event) => {
    const newerrors = {};
  event.preventDefault();
  if (!name.trim()) {
    newerrors.name = "name is requerd";
  }
  if(!email.trim()){
    newerrors.email='email is requerd'
  }
  if(password.length<6){
    newerrors.password='password is requerd'
  }

   setErrors(newerrors)
  if(Object.keys(newerrors).length>0) return
  
    console.log("sumited",
        name,email,password);
  };

  return (
    <div>
      <form onSubmit={SignupHendler}>
        <label>
            Name:
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Your Name"
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </label>
        <br />
        <label>
            Email:
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Your Email"
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </label>
        <br />
        <label>
            password:
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Your password"
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </label>
        <br />
        <button>signup</button>
      </form>
    </div>
  );
};

export default Signup;


