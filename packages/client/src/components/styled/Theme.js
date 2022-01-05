import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    dark: "#2d3748",
    light: "#fff",
    accentA: "#e0e7ff",
    accentB: "#6366f1",
    accentC: "#A855F7",
    primaryBackground: "#FAFAFE",
    secondaryBackground: "#f6f7fa",
    formBackground: "#EDF2F7",
    darkButtonBackground: "#6366f1",
    darkButtonText: "#fff",
    lightButtonBackground: "#e0e7ff",
    lightButtonText: "#3730a3",
    error: "#ee5f5f",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
