import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreatePost from "./CreatePost";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/createPost">
              <CreatePost />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
