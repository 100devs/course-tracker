import styled from "styled-components";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
<<<<<<< HEAD
          <Route path="/createPost">
=======
          <Route path="/create-post">
>>>>>>> dcab7fe (updated client and server paths to shish-kebab-case)
            <CreatePost />
          </Route>
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
