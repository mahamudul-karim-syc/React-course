import { useState } from "react";


const Shoping = () => {

    const [todo,setTodo]=useState(['milk','pen','laptop','hedephone'])
   // console.log(todo,'todo')
    const hendleremove=(item)=>{
       // console.log(item)
       const newtodolist=todo.filter((todoitem)=>{
        return todoitem!=item
       })
       setTodo(newtodolist)
    }
     const addtotoitem=(newtoto)=>{
        setTodo([...todo,newtoto])

    
       }

    return (
        <div className="todo-list">
             <h2>todo list</h2>
             <button onClick={()=>addtotoitem("chosma")}>chosma</button>
             <button onClick={()=>addtotoitem("gori")}>gori</button>
            <div className="item-parent">
               
                {todo.map((item,ind)=>{
                    return <h2 key={ind} onClick={()=>hendleremove(item)}>{item}</h2>
                })
                }
            </div>
           
        </div>
    );
};

export default Shoping;