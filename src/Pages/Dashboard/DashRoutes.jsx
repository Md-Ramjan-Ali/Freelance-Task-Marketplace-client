import React from "react";
import Logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import "./dashbord.css";

const DashRoutes = () => {
  return (
    <aside className="flex flex-col items-center text-center md:w-72 p-4 space-y-4 h-fit bg-white dark:bg-gray-800 dark:text-white rounded-xl lg:sticky top-24">
      <div className="border-b-2 pb-10">
        <Link to="/" className="flex items-center cursor-pointer overflow-hidden">
          <img className="w-16 hidden md:flex" src={Logo} alt="" />
          <h2 className=" text-2xl font-bold ">
            <span className="text-green-500">Job</span>Pond
          </h2>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-5 mt-5">
        <NavLink to="/dash/dashboard">Dashboard</NavLink>
        <NavLink to="/dash/dashBrowseTask">Browse Tasks</NavLink>
        <NavLink to="/dash/addtask">Add Task</NavLink>
        <NavLink to="/dash/myposttask">My Posted Tasks</NavLink>
      </div>
    </aside>
  );
};

export default DashRoutes;
