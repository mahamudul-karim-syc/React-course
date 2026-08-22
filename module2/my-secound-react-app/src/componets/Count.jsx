

const Count = ({counter,setCounter}) => {
    // console.log(Count)

    return (
        <h2>
             {counter }
            <button onClick={()=>setCounter(100)}>update</button>
           
        </h2>
    );
};

export default Count;