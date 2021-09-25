import styled from "styled-components";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./Login";
import CreatePost from "./components/CreatePost";

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
            <Route path="/createPost">
              <CreatePost />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </AppContainer>
    </AuthContextProvider>
  );
}

export default App;
