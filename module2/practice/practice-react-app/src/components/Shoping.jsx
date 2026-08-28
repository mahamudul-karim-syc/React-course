import { useState } from "react";
const Shoping = () => {
    const [todo,setTodo]=useState(['tel','alu','potato','morice','morgi'])
    const remove=(items)=>{
        console.log(items)
       const newtodolist=todo.filter((todoItem)=>todoItem!=items);
        setTodo(newtodolist)        



    }
    const addhendler=(newItem)=>{
        console.log(newItem)
        setTodo((prvtodo)=>[...prvtodo, newItem])
    }

    return (
        <div className="todo-continer">
            <h2>Shoping list</h2>
            <button onClick={()=>addhendler('laptop')}>laptop</button>
            <button onClick={()=>addhendler('phone')}>phone</button>

            <div className="todo-list">
                {
                    todo.map((items,ind)=>{
                        return<h2 onClick={()=>remove(items)}  key={ind}>{items}</h2>
                    })
                }
            </div>
        </div>
    );
};

export default Shoping;

