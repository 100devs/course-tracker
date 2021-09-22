import styled from "styled-components";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreatePost from "./CreatePost";

const AppContainer = styled.div`
  text-align: center;
  *,
  *:before,
  *:after {
    box-sizing: inherit;
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
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
