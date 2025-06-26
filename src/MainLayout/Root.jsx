import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Header/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Loading from "../Loading/Loading";
import { ToastContainer } from "react-toastify";

const Root = () => {
  const { state } = useNavigation();
  return (
    <div className="dark:bg-gray-900">
      <Navbar></Navbar>

      <main className="bg-base-200 dark:bg-gray-900">{state == "loading" ? <Loading /> : <Outlet></Outlet>}</main>
      <footer>
        <Footer></Footer>
      </footer>
      <ToastContainer/>
    </div>
  );
};

export default Root;
