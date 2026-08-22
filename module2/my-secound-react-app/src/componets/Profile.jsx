import { useState } from "react";


const Profile = () => {
    const [user , setUser]=useState({name:'karim',age:22,location:'dinjpur'})
    console.log(user,'user')
    const Hendleage=()=>{
        // newuser.age=setUser.age+1 
        const newuser={...user,age:user.age+1}
        setUser(newuser)

    }
    return (
        <div className="profile-card">
            profile
            <h2>{user.name}</h2>
             <h2>{user.age}</h2>
              <h2>{user.location}</h2>
              <button onClick={()=>Hendleage()}>incriment age</button>
        </div>
    );
};

export default Profile;