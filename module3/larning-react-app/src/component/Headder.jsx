import { RxHamburgerMenu } from "react-icons/rx";
const Headder = () => {
    return (
        <div className="flex justify-between bg-amber-200 py-3 px-6 ">
            <p>Our web</p>
            <div  className="hidden lg:block" >
                <ul className="flex gap-6">
                    <li>Home</li>
                    <li>Service</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div >
                <button className="hidden lg:block">Login</button>
                <RxHamburgerMenu  className="lg:hidden block "/>
            </div>

        </div>
    );
};

export default Headder;