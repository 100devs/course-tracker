import React from "react";
import { Link } from "react-router-dom";
// import logo from "./logo-banner.jpg"
import { ReactComponent as TaskLemon } from "./logo.svg";

const Logo = (props) => {
  return (
    <>
      <Link to="/" flexDirection="row">
        {/* <img src={logo} alt="Logo" style={{width:"0%"}}/> */}
      </Link>
      <TaskLemon />
    </>
  );
};
export default Logo;
