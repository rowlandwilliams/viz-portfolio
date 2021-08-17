import React from "react";
import "./App.css";
import { NavBar } from "./components/Navbar/NavBar";
import { Projects } from "./components/Projects/Projects";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col md:flex-row">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Projects />
          </Route>
          <Route path="/stockchart">
            <div>stocks</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
