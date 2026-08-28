const Count = ({count,setcount}) => {
    count=50;
    // console.log(setcount)
    return (
        <div>
            <h1>counter{count}</h1>
            <button onClick={()=>setcount(100)}>update</button>
        
        </div>
    );
};

export default Count;