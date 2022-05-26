import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

interface LayoutPropsType {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutPropsType) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
