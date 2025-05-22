import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Header/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Loading from "../Loading/Loading";

const Root = () => {
  const { state } = useNavigation();
  return (
    <div>
      <Navbar></Navbar>

      <main>{state == "loading" ? <Loading /> : <Outlet></Outlet>}</main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
