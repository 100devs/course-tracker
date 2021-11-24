import { useContext } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import { AuthContext } from "../context/AuthContext";

const excludeNav = ["/login"];

function Layout({ children }) {
  // const { isAdmin } = useContext(AuthContext);
  const { pathname } = useLocation();
  if (excludeNav.includes(pathname)) {
    return (
      <>
        {children}
        <Footer/>
      </>
    );
  }
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  );
}

export default Layout;
