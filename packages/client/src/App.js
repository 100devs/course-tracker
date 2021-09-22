import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/createPost">
            <CreatePost />
            <Post />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
