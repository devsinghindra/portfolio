import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";
import Resume from "./Resume/Resume";

import "./App.css";

function App() {
  return (
    <Router>
      <div style={{ flex: "1", display: "flex", flexFlow: "column" }}>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contacts" exact component={Contacts} />
          <Route path="/resume" exact component={Resume} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
