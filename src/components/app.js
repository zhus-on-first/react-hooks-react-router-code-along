import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import About from "./About";
import Login from "./login";
import Signup from "./signup";
import Messages from "./messages";
import NavBar from "./navbar";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/messages">
          <Messages />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
