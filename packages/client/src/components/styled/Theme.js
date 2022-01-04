import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    primary: "#000000",
    secondary: "#096536",
    tertiary: "#4E4B4C",

    buttonDark: "#6366f1",
    buttonLight: "#e0e7ff",
    buttonTextDark: "white",
    buttonTextLight: "#3730a3",

    bgPrimary: "#FFF",
    bgSecondary: "#f6f7fa",
    bgTertiary: "#e0e7ff",

    accent: "#B1BD55",

    textPrimary: "#000000",
    textLight: "#EFFBEE",
    textDark: "#2d3748",

    error: "#ee5f5f",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
