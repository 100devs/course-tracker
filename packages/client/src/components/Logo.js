import React from "react";
import { ReactComponent as TextLogo } from "../assets/task-lemon-txt-logo.svg";
// import { ReactComponent as TextLogo } from "../assets/text-logo.svg";
import { ReactComponent as LemonLogo } from "../assets/lemon-logo.svg";

const Logo = ({ lemonView }) => {
  return <>{lemonView ? <LemonLogo /> : <TextLogo />}</>;
};
export default Logo;
