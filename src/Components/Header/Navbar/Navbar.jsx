import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../../AuthContext/AuthContext";
import Logo from '../../../assets/logo.png'

const Navbar = () => {
  const { user, logOUt } = use(AuthContext);

  const handleLogOut = () => {
    logOUt();
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addtask">Add Task</NavLink>
      </li>
      <li>
        <NavLink to="/browsetask">Browse Tasks</NavLink>
      </li>
      <li>
        <NavLink to="/myposttask">My Posted Tasks</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <nav className="navbar bg-base-100 shadow-sm px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="flex gap-1 items-center cursor-pointer">
            <img className="w-16 " src={Logo} alt="" />
            <h2 className=" text-2xl font-bold ">JobPond</h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-8">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          <div
            className="cursor-pointer tooltip tooltip-left"
            data-tip={user?.displayName}
          >
            {user ? (
              <img
                className="rounded-full w-12 h-12 border card shadow-sm"
                src={`${user ? user?.photoURL : ""}`}
                alt=""
              />
            ) : (
              ""
            )}
          </div>
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn bg-primary text-white"
            >
              LogOut
            </button>
          ) : (
            <>
              <Link to="/auth/login">
                <button className="btn bg-primary text-white">Login</button>
              </Link>
              <Link to="/auth/register">
                <button className="btn bg-primary text-white">Sign up</button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
