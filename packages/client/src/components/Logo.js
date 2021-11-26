import React from "react";
import { ReactComponent as TextLogo } from "./text-logo2.svg";
import { ReactComponent as LemonLogo } from "./lemon-logo.svg";

const Logo = ({ lemonView }) => {
  return <>{lemonView ? <LemonLogo /> : <TextLogo />}</>;
};
export default Logo;
