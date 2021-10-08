import { createContext, useState, useCallback } from "react";
import axios from "axios";

const backend = process.env.REACT_APP_BACKEND;

//creating the auth context object
export const AuthContext = createContext();

//creating provider component
export const AuthContextProvider = ({ children }) => {
  const [user, _dispatch] = useState(() => {
    // retrieve token from local storage or returns null/empty object or false?
    return JSON.parse(localStorage.getItem("Token Object")) || false;
  });

  const login = useCallback(async ({ email, password }) => {
    const result = await axios.post(`${backend}api/auth/login`, {
      email,
      password,
    });
    _dispatch(result.data);
    localStorage.setItem("Token Object", JSON.stringify(result.data));
  }, []);

  const logout = useCallback(() => {
    _dispatch({});
    localStorage.deleteItem("Token Object");
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
