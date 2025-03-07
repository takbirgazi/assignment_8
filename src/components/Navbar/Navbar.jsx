import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navList = 
        <>
           <li><NavLink to="/">Home</NavLink></li>
           <li><NavLink to="/list">Listed Books</NavLink></li>
           <li><NavLink to="/read">Pages to Read</NavLink></li>
           <li><NavLink to="/about">About US</NavLink></li>
           <li><NavLink to="/contact">Contact US</NavLink></li>
        </>
    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="flex gap-2 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navList}
                </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost text-xl">Book Vibe</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navList}
                </ul>
            </div>
            <div className="navbar-end flex gap-2 text-white">
                <a className="lg:px-4 px-2 lg:py-2 py-1 rounded bg-[#23BE0A]">Sign In</a>
                <a className="lg:px-4 px-2 lg:py-2 py-1 rounded bg-[#59C6D2]">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;