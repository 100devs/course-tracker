import React from "react";
import { ArrowSquareOut } from "phosphor-react";

const NavbarData = [
  { title: "Home", path: "/", cName: "nav-links" },
  { title: "Assignments", path: "/feed", cName: "nav-links" },
  {
    title: "Twitch",
    path: "https://twitch.tv/learnwithleon",
    icon: <ArrowSquareOut />,
    cName: "nav-links",
  },
  {
    title: "Discord",
    path: "https://leonnoel.com/discord",
    icon: <ArrowSquareOut />,
    cName: "nav-links",
  },
  {
    title: "100Devs",
    path: "https://leonnoel.com/100devs",
    icon: <ArrowSquareOut />,
    cName: "nav-links",
  },
];

export default NavbarData;
