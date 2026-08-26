import Login from "./Login";

const Grating = (props) => {
    const {title,name,massage,Logedin}=props
    const crrentYear=new Date().getFullYear()
        if(Logedin){
        return <Login></Login>
    }
    return (
        
        <div className="demo">
            <h1>Welcome {crrentYear} {title} {name} </h1>
            <p>massage {massage}</p>
        </div>
    );
};

export default Grating;