import { createContext, useState, useCallback } from "react";

//creating the auth context object
export const AuthContext = createContext();

//creating provider component
export const AuthContextProvider = ({ children }) => {
  //what is the difference between using useState() here or useReducer ?
  const [admin, _dispatch] = useState(() => {
    // retrieve token from cookie or local storage or returns null/empty object or false?
    return JSON.parse(localStorage.getItem("Admin Object")) || false;
  });

  const dispatch = useCallback((val) => {
    // send token as cookie or local storage
    // gives you a function that allows you to assign token to user variable ... (creates _dispatch)
    _dispatch(val);
    localStorage.setItem("Admin Object", JSON.stringify(val));
  }, []);

  return (
    <AuthContext.Provider value={{ admin, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
