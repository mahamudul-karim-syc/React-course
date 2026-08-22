const Practice2 = ({counter,setCounter}) => {

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={()=>setCounter(100)}>update</button>
        </div>
    );
};

export default Practice2;