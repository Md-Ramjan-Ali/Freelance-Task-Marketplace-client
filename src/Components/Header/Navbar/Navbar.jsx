import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../../AuthContext/AuthContext";
import Logo from "../../../assets/logo.png";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";
import DarkToggler from "../../DarkToggler/DarkToggler";

const Navbar = () => {
  const { user, logOUt } = use(AuthContext);

  const handleLogOut = () => {
    logOUt();

    Swal.fire({
      icon: "success",
      title: "LogOut Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/browsetask">Browse Tasks</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/dash/dashboard">Dashboard</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="/about">About us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <nav className="navbar bg-green-400 shadow-sm px-10 sticky top-0 z-50 dark:bg-gray-900/50 backdrop-blur">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 dark:text-white"
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
        <Link to="/" className="flex items-center cursor-pointer">
          <img className="w-16 " src={Logo} alt="" />
          <h2 className=" text-2xl font-bold hidden md:flex text-white">
            <span className=" dark:text-white">Job</span>
            <span>Pond</span>
          </h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex text-white">
        <ul className="flex gap-8">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        <div className="card items-center">
          <DarkToggler></DarkToggler>
        </div>
        <div
          className="cursor-pointer"
          data-tooltip-id="my-tooltip"
          data-tooltip-place="left"
          data-tooltip-content={user?.displayName}
        >
          {user ? (
            <img
              className="rounded-full w-12 h-12 border-2 border-white card shadow-sm"
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
            className="btn bg-green-500 hover:bg-green-700 text-white"
          >
            LogOut
          </button>
        ) : (
          <>
            <Link to="/auth/login">
              <button className="btn bg-green-500 hover:bg-green-700 text-white">
                Login
              </button>
            </Link>
            <Link to="/auth/register">
              <button className="btn bg-green-500 hover:bg-green-700 text-white">
                Sign up
              </button>
            </Link>
          </>
        )}
      </div>
      <Tooltip id="my-tooltip" />
    </nav>
  );
};

export default Navbar;
