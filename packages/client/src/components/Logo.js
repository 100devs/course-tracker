import React from "react";
import { ReactComponent as TextLogo } from "../assets/task-lemon-txt-logo.svg";
import { ReactComponent as LemonLogo } from "../assets/lemon-logo.svg";

const Logo = ({ lemonView }) => {
  return <>{lemonView ? <LemonLogo /> : <TextLogo />}</>;
};
export default Logo;

// ASSETS was moved to SRC to avoid import conflict for logos, but should ultimately be in PUBLIC
// (create-react-app uses ModuleScopePlugin to ensure that relative imports from app's source directory don't reach outside of it...)

// There are better work-arounds to address this, should be revisited after MVP  --relspeedwagon
