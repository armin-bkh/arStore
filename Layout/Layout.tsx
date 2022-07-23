import { useAppDispatch } from "helpers/hooks/useStore";
import React, { useLayoutEffect } from "react";
import { savedUserData } from "redux/auth/authActions";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

interface LayoutPropsType {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutPropsType) => {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("ArStoreUser")!);
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
