import { createContext, useState, useCallback } from "react";

//creating the auth context object
export const AuthContext = createContext();

//creating provider component
export const AuthContextProvider = ({ children }) => {
  //what is the difference between using useState() here or useReducer ?
  const [user, _dispatch] = useState(() => {
    // retrieve token from cookie or returns null/empty object and assign
    return true;
  });

  const dispatch = useCallback((val) => {
    // send token as cookie
    // gives you a function that allows you to assign token to user variable ... (creates _dispatch)
    _dispatch(val);
  }, []);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
