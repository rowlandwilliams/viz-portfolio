import React from "react";
import "./App.css";
import { NavBar } from "./components/Navbar/NavBar";
import { Projects } from "./components/Projects/Projects";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  console.log(process.env.PUBLIC_URL, process.env.PUBLIC_URL + "/");
  return (
    <div className="relative flex flex-col md:flex-row">
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Projects />
          </Route>
          <Route exact path="/stockchart">
            <div>stocks</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
