import { Link } from "react-router-dom";
import logo from "../../assets/log.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import './styles.css';

const Navbar = () => {

  const {user,logOut} =  useContext(AuthContext)


  const handleLogout = () => {
    logOut();
  }


    return (
        <div className="navbar bg-white rounded-md z-30 fixed top-0 max-w-[1296px] px-5 NavFont">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/">Home</Link></li>
              <li>
                <a>Information</a>
                <ul className="p-2">
                  <li><Link to="/school">school</Link></li>
                  <li><Link to="/college">college</Link></li>
                  <li><Link to="/university">university</Link></li>
                </ul>
              </li>
              <li><Link to="/competitions">competitions</Link></li>
            <li><Link to="/leaderboard">leaderboard</Link></li>
            <li><Link to="/challenge">challenge</Link></li>
            <li><Link to="/blog">blog</Link></li>

            </ul>
          </div>
          <a className="btn btn-ghost text-xl"> <img className="h-full" src={logo} alt="" /> </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
            <li>
              <details>
                <summary>Information</summary>
                <ul className="p-2">
                <li><Link to="/school">school</Link></li>
                  <li><Link to="/college">college</Link></li>
                  <li><Link to="/university">university</Link></li>
                </ul>
              </details>
            </li>
            <li><Link to="/competitions">competitions</Link></li>
            <li><Link to="/leaderboard">leaderboard</Link></li>
            <li><Link to="/challenge">challenge</Link></li>
            <li><Link to="/blog">blog</Link></li>
            
          </ul>
        </div>




        <div className="navbar-end">

          {
            user? <> <Link to="/dashboard/main"><div className="btn btn-ghost btn-circle avatar mr-1">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/hg9Pj1n/boy-Avatar.png"/>
            </div>
          </div></Link>  
      
              <button onClick={handleLogout} className="inline-flex items-center justify-center rounded-lg bg-green-600 py-2 px-5 font-dm text-base font-medium text-white shadow-lg shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]">
              Logout
           </button>
           </>: <>
           
           <Link to="/login" class="inline-flex items-center justify-center rounded-lg bg-green-600 py-2 px-5 font-dm text-base font-medium text-white shadow-lg shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]">
          Login
       </Link>
           </>
          }

        </div>
      </div>
    );
};

export default Navbar;