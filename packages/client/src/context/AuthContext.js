import { createContext, useState, useCallback } from "react";
import axios from "axios";

const backend = process.env.REACT_APP_BACKEND;

//NEED TO: create res.errors state (but not like this...)
// export const ResponseErrors = (err) => {
//   const [resErrors, setResErrors] = useState({});

// }

//creating the auth context object
export const AuthContext = createContext();

//creating provider component
export const AuthContextProvider = ({ children }) => {
  const [user, _dispatch] = useState(() => {
    // retrieve token from local storage or returns null/empty object or false?
    return JSON.parse(localStorage.getItem("Token Object")) || false;
  });

  const login = useCallback(async ({ email, password }) => {
    await axios
      .post(`${backend}api/auth/login`, {
        email,
        password,
      })
      .then((response) => {
        _dispatch(response.data);
        localStorage.setItem("Token Object", JSON.stringify(response.data));
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data.message);
          // save error.response.data.message to resError state
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }, []);

  const logout = useCallback(() => {
    _dispatch({});
    localStorage.removeItem("Token Object");
    window.location.reload(false);
  }, []);

  const [isAdmin, setIsAdmin] = useState(false);

  const getAdminStatus = useCallback(async (id) => {
    if (id) {
      const res = await axios.get(`${backend}api/get/admin-status/${id}`);
      setIsAdmin(res.data.isAdmin);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAdmin, getAdminStatus }}
    >
      {children}
    </AuthContext.Provider>
  );
};
