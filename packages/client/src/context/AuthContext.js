import { createContext, useState, useCallback } from "react";

//creating the auth context object
export const AuthContext = createContext();

//creating provider component
export const AuthContextProvider = ({ children }) => {
  const [user, _dispatch] = useState(() => {
    // retrieve token from local storage or returns null/empty object or false?
    return JSON.parse(localStorage.getItem("Token Object")) || false;
  });

  const dispatch = useCallback((val) => {
    // send token to local storage
    // gives you a function that allows you to assign token to user variable ... (creates _dispatch)
    _dispatch(val);
    localStorage.setItem("Token Object", JSON.stringify(val));
  }, []);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
