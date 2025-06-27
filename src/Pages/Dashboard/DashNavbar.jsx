import React, { use } from "react";
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthContext/AuthContext";
import DarkToggler from "../../Components/DarkToggler/DarkToggler";

const DashNavbar = () => {
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

  return (
    <nav className="navbar bg-transparent px-10 sticky top-0 z-50 dark:bg-gray-900/50 dark:text-white backdrop-blur">
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
          ></ul>
        </div>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-8"></ul>
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

export default DashNavbar;
