import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    primary: "#000000",
    secondary: "#096536",
    tertiary: "#4E4B4C",

    bgPrimary: "#CDDBCC",
    bgSecondary: "#EFFBEE",
    bgTertiary: "#1f321d",

    accent: "#B1BD55",

    textPrimary: "#000000",
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
