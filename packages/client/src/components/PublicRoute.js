import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { user } = useContext(AuthContext);

  const userCheck = Object.keys(user).length ? true : false;

  return (
    <Route
      {...rest}
      render={(props) =>
        userCheck && restricted ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
