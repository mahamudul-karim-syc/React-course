
const Count = ({count,setcount}) => {
    count=50;
    return (
        <div>
            <h2>{count}</h2>
        <button onClick={()=>setcount(100)}>update</button>
        </div>
    );
};

export default Count;