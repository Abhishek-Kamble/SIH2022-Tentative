import  { NavLink } from "react-router-dom";

const Navbar=()=> {
    return (
        <div className="navbar">
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;