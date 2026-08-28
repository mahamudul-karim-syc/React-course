
import UserCard from "./UserCard";

const SelectUser = ({ selectuser}) => {
    return (
        <div className="select-user">
            <h2>Select User</h2>
            <div>{
                selectuser.map((su,ind)=>{
                    return <UserCard key={ind} item={su}/>
                })
                }

            </div>
           
        </div>
    );
};

export default SelectUser;