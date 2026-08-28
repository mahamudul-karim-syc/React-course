import { useState } from "react";

const Shoping = () => {
    const [todo,setTodo]=useState(['tel','alu','potol','morice','holud' ])
    const removeitem=(item)=>{
        console.log(item)
        const newlist=todo.filter((todoitem)=>todoitem !=item)
        setTodo(newlist)

    }
    const addtolist=(newitem)=>{
        console.log(newitem)
        setTodo((prvtodo)=>[...prvtodo,newitem])

    }
    return (
        <div className="list">
            <h2>Shoplist</h2>
            <button onClick={()=>addtolist('solt')}>solt</button>
            <div className="todo-list">
                {
                    todo.map((items,ind)=>{
                        return <h2 key={ind} onClick={()=>removeitem(items)}>{items}</h2>
                    })
                }
            </div>
           
            
        </div>
    );
};

export default Shoping;