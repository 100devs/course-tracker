import styled from "styled-components";
import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./components/Login";
import Feed from "./Feed";
import CreatePost from "./components/CreatePost";
import AdminRoute from "./components/AdminRoute";
import PublicRoute from "./components/PublicRoute";

const AppContainer = styled.div`
  text-align: center;
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    font-family: "Work Sans", sans-serif;
  }
`;

function App() {
  return (
    <AuthContextProvider>
      <AppContainer>
        <Router>
          <Switch>
            <PublicRoute
              component={Login}
              path="/login"
              restricted={true}
              exact
            />
            <PublicRoute component={Feed} path="/" restricted={false} exact />
            <AdminRoute component={CreatePost} path="/create-post" exact />
          </Switch>
        </Router>
      </AppContainer>
    </AuthContextProvider>
  );
}

export default App;
