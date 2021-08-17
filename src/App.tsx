import React from "react";
import "./App.css";
import { NavBar } from "./components/Navbar/NavBar";
import { Projects } from "./components/Projects/Projects";
import { HashRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="relative flex flex-col md:flex-row">
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
