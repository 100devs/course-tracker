import styled from "styled-components";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Feed from "./Feed";
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
    <AppContainer>
      <Router>
        <Switch>
          <Route path="/createPost">
            <CreatePost />
          </Route>
          <Route path="/">
            <Feed />
          </Route>
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
