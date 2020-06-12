import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";
import Resume from "./Resume/Resume";

import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contacts" exact component={Contacts} />
          <Route path="/resume" exact component={Resume} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
