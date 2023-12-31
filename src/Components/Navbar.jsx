import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import changeTheme from "../DarkMode/Toggle";
import { AuthContext } from "../Provider/AuthProvider";
import { FaBook } from "react-icons/fa";
// import { FaMoon, FaSun } from "react-icons/fa";
// import AuthContext from "../Provider/AuthProvider"
const Navbar = () => {

  const allLinks = <>
    <li className="text-lg"><NavLink to="/">Home</NavLink></li>
    <li className="text-lg"><NavLink to="/addbook">Add Book</NavLink></li>
    <li className="text-lg"><NavLink to="/allbooks">All Books</NavLink></li>
    <li className="text-lg"><NavLink to="/borrowedbooks">Borrowed Books</NavLink></li>

  </>

  const [theme, setTheme] = useState('Dark');
  const handleChange = () => {
    console.log('Handle change clicked!');
    changeTheme();
    if (theme === 'Dark') {
      setTheme('Light');
      
    } else {
      setTheme('Dark');
      
    }
  }

  const { user,logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {allLinks}
          </ul>
        </div>
       <span className="text-red-500 text-sm md:text-4xl"> <FaBook></FaBook></span>
        <a className="normal-case font-bold text-2xl md:text-4xl text-green-600"><span className="text-red-500"> OG</span>Library</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {allLinks}
        </ul>
      </div>
      <div className="navbar-end">
        {

          <div>
            {

              (user) && <img className="h-full md:h-[60px] w-full lg:w-9/12 rounded-full object-cover mx-2"
                src={(user) ? user.photoURL : ''} alt="" />

            }
          </div>
        }

        {

          <div>
            {
              <p className="mx-3 font-md text-sm md:text-lg">{(user) ? user.displayName : ''}</p>
            }
          </div>
        }

        {

          <div>
            {
              (user) ? <a onClick={handleLogOut} className="btn btn-sm lg:btn-md">LogOut</a> :
                <Link className="btn btn-sm lg:btn-md" to="/login">Login</Link>

            }
          </div>
        }

        <a onClick={handleChange} className="btn text-xs btn-gray btn-circle p-1 m-2">{theme}</a>
      </div>
    </div>
  );
};

export default Navbar;