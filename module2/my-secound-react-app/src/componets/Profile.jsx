import { useState } from "react";

const Profile = () => {
    const [user,setUser]=useState({
        name:'karim',
        age:22,
        location:'Dinajpur'
    })
    const agehendler=()=>{
        
        const newuser={...user,age:user.age+1}
        setUser(newuser)
    //    setUser({...user,age:user.age+1})
    }
    return (
        <div className="list">
            <h2>Profile</h2>
            <h3>{user.name}</h3>
            <h3>{user.age}</h3>
            <h3>{user.location}</h3>
            <button onClick={agehendler}>incrementage</button>
        </div>
    );
};

export default Profile;