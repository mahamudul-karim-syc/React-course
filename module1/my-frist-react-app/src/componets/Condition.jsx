
const Condition = ({name='null',title='null',loggedIn, spasialmassage}) => {

    if(!loggedIn){
        return <div className="Condition-card">
            <h2>Sorry {name} you are not login your acount God by</h2>
        </div>

    }
    return (
        <div className="Condition-card">
            <h2>{name} {title}</h2>
            <p>{ spasialmassage &&  spasialmassage}</p>
            
        </div>
    );
};

export default Condition;