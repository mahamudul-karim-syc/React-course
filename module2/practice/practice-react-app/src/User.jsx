import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import SelectUser from "./SelectUser";

const User = () => {
    const [user,setUser]=useState([])
    const [isloading,setIsloading]=useState(true)
     const [selectuser,setSelectuser]=useState([])

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then(res=>res.json())
        .then((data)=>{
            setUser(data);
            setIsloading(false)
        })
    })
    // if(isloading){
    //     return <h2>Loading....</h2>
    // }
    // console.log(user)
    return (
        <div className="user-continer">

            <h1>user</h1>
            <SelectUser selectuser={selectuser} />
            {
                isloading ?<h2>Loading...</h2> : <div className="cart-continer">
             {
                user.map((item,ind)=>{
                    return <UserCard item={item} key={ind} selectuser={selectuser}setSelectuser={setSelectuser}/>
                })
            }
           </div>
            }
        </div>
    );
};

export default User;