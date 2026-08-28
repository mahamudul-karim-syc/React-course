import { useState } from "react";
const Profile = () => {
    const [user,setUser]=useState({name:'karim',age:22,Location:'Dinajpur'})
    const hendleage=()=>{
        // setUser(user.age, user.age+1)
       const newuser={...user, age: user.age + 1}
        setUser(newuser)
    //setUser({ ...user, age: user.age + 1 });
    }
    return (
        <div>
            <h1>Profile</h1>
            <div>
                <h2>{user.name}</h2>
                <h2>{user.Location}</h2>
                <h2>{user.age}</h2>
                <button onClick={()=>hendleage()}>increment age</button>
            </div>  
        </div>
    );
};

export default Profile;

