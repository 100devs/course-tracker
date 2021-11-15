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

  const [resErrors, setResErrors] = useState(false);

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
          setResErrors(error.response.data.message);
        } else {
          console.log("Error", error.message);
        }
      });
  }, []);

  const logout = useCallback(() => {
    const user = JSON.parse(localStorage.getItem("Token Object"));
    axios.post(`${backend}api/auth/logout/${user.userId}`);
    _dispatch({});
    localStorage.removeItem("Token Object");
    window.location.reload(false);
  }, []);

  const [isAdmin, setIsAdmin] = useState(false);

  const getAdminStatus = useCallback(async (id) => {
    if (id) {
      const res = await axios.get(`${backend}api/get/admin-status/${id}`);
      setIsAdmin(res.data.isAdmin);
      return res.data.isAdmin;
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAdmin, getAdminStatus, resErrors }}
    >
      {children}
    </AuthContext.Provider>
  );
};
