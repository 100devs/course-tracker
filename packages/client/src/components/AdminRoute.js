import React, { useContext, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const backend = process.env.REACT_APP_BACKEND;

const AdminRoute = ({ component: Component, ...rest }) => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState();

  const { user } = useContext(AuthContext);

  const getAdminStatus = async () => {
    const res = await axios.get(
      `${backend}api/get/admin-status/${user.userId}`
    );
    setIsAdmin(res.data.isAdmin);
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      getAdminStatus();
    } else {
      setLoading(false);
      setIsAdmin(false);
    }
  }, []);

  if (loading) {
    return <></>;
  }
  return (
    // {/* // Show the component only when the user is an admin */}
    // {/* // Otherwise, redirect the user to /signin page */}
    <Route
      {...rest}
      render={(props) =>
        isAdmin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default AdminRoute;
