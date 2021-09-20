import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreatePost from "./CreatePost";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/createPost">
              <CreatePost />
            </Route>
          </Switch>
        </Router>
      </div>
    </AuthContextProvider>
  );
}

export default App;
