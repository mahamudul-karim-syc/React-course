const Uncontrol = () => {
    const hendelsubmit=()=>{
        const value=document.getElementById('input-text').value;
        console.log(value)

    }
    return (
        <div>
           <input id="input-text" type="text"></input>
           <button onClick={ hendelsubmit}>submit</button>
        </div>
    );
};

export default Uncontrol;