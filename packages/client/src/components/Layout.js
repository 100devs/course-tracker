import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const excludeNav = ["/login"];

function Layout({ children }) {
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
