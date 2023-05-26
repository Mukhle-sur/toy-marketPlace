import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.jpg";
import text from '../../../assets/marvel.png'
import { AuthContext } from "../../../Provider/AuthProvider";

const NabBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleLogOut = () => {
    logOut()
      .then((res) => {})
      .catch((error) => {
        setError(error.message);
      });
  };
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allToys">All Toys</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      {user?.email ? (
        <>
          <li>
            <Link to="/addToy">Add A Toy</Link>
          </li>
          <li>
            <Link to="/myToy">My Toys</Link>
          </li>
        </>
      ) : (
        ""
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-sans"
          >
            {navItems}
          </ul>
        </div>
        <img src={logo} alt="" className="w-12" />
        <img src={text} alt="" className="w-14 sm:w-28 ml-3"/>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-sans">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="avatar mr-5">
              <div className="w-12 rounded-full ring ring-primary  ring-offset-base-100 ring-offset-2">
                <img
                  src={user?.photoURL}
                  title={user?.displayName}
                  className="cursor-pointer"
                />
              </div>
            </div>

            <button onClick={handleLogOut} className="btn">
              Log out
            </button>
          </>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NabBar;
