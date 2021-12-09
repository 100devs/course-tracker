import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "black",
    secondary: "#096536",
    // <Eye aria-label="" color="#2C5523" />
    tertiary: "#4E4B4C",

    bgPrimary: "#CDDBCC",
    // bgPrimary: "#BBC9BA",
    bgSecondary: "#EFFBEE",
    bgTertiary: "#1f321d",

    accent: "#B1BD55",
    // accent: "#879786",
    textLight: "#EFFBEE",
    textDark: "#1f321d",

    bgHover: "#3D3D3D",
    buttonText: "white",
    error: "#ee5f5f",

    primaryIcon: "",
    secondaryIcon: "",
    tertiaryIcon: "#4E4B4C",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
