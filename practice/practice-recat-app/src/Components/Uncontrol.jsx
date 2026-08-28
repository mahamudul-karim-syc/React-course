const Uncontrol = () => {
    const submithendler=()=>{
        const value=document.getElementById("text-cart").value
        console.log(value)
    }
    return (
        <div>
            <input type="text" id="text-cart" />
            <button onClick={submithendler}>submit</button>
        </div>
    );
};

export default Uncontrol;