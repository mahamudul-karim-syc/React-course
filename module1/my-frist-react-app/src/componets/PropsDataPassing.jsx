
const PropsDataPassing = ({name='null',title='null' ,loggedIn=false, spasialmassage}) => {
//const PropsDataPassing = ({title, price, isStack}) => { //type 2
    // console.log(props)
    //const {title,price,isStack}=props;//type 3
    // console.log(loggedIn)
 
    if (!loggedIn){
        return  <div className="loggedin-card">
             <h1>sorry {name} you are  unothorize Goodby!!</h1>
        </div>
    }
    return (
        <div className="props">
            <h1>{title} {name} </h1>
            <p> {spasialmassage && spasialmassage}</p>
        </div>
    );
};

export default PropsDataPassing;

