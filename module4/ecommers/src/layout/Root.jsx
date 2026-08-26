import { Outlet } from "react-router";

const Root = () => {
    return (
        <div>
            <p>this is Navber</p>
            <Outlet/>
        </div>
    );
};

export default Root;