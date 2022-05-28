import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { savedUserData } from "redux/user/userActions";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

interface LayoutPropsType {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutPropsType) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("ArStoreUser") || "");
    if (savedUser) {
      dispatch(savedUserData(savedUser));
    }
  }, []);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
