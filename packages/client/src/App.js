import React from "react";
import Theme from "./components/styled/Theme";
import styled from "styled-components";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./components/Login";
import Feed from "./Feed";
import CreatePost from "./components/CreatePost";
import AdminRoute from "./components/AdminRoute";
import PublicRoute from "./components/PublicRoute";
import Layout from "./components/Layout";

const AppContainer = styled.div`
  text-align: center;
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    line-height: 1.7rem;
  }
`;

function App() {
  return (
    <Theme>
      <AuthContextProvider>
        <AppContainer>
          <Router>
            <Layout>
              <Switch>
                <PublicRoute
                  component={Login}
                  path="/login"
                  restricted={true}
                  exact
                />
                <PublicRoute
                  component={Feed}
                  path="/"
                  restricted={false}
                  exact
                />
                <AdminRoute component={CreatePost} path="/create-post" exact />
              </Switch>
            </Layout>
          </Router>
        </AppContainer>
      </AuthContextProvider>
    </Theme>
  );
}

export default App;
