import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "black",
    secondary: "#CCC",
    bgPrimary: "#BBC9BA",
    bgSecondary: "#EFFBEE",
    bgTertiary: "#1f321d",
    accent: "#879786",
    textLight: "#EFFBEE",
    textDark: "#1f321d",
    bgHover: "#3D3D3D",
    buttonText: "white",
    error: "#ee5f5f",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
