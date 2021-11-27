import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "black",
    secondary: "#CCC",
    bgPrimary: "#e5e5e5",
    bgSecondary: "#e5e5e5",
    navLink: "white",
    bgHover: "#3D3D3D",
    buttonText: "white",
    error: "#ee5f5f",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
