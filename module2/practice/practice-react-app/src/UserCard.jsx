// import { useState } from "react";


const UserCard = ({item, selectuser, setSelectuser}) => {
 

  const selecthendler=(()=>{
    setSelectuser([...selectuser,item])
  })
  // console.log(selectuser,'select user ')

  return (
    
    <div className="prodact-cart" onClick={selecthendler}>
    
      <h2>ID: {item.id}</h2>
      <h2>Title: {item.title}</h2>
      <h2>Price: {item.price}</h2>
    </div>
  );
};

export default UserCard;
