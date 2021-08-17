import React from "react";
import "./App.css";
import { NavBar } from "./components/Navbar/NavBar";
import { ProjectsGrid } from "./components/ProjectsGrid/ProjectsGrid";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { PageTemplate } from "./components/PageTemplate/PageTemplate";
import { projectData } from "./components/utils/projectData";

function App() {
  console.log(process.env.PUBLIC_URL, process.env.PUBLIC_URL + "/");
  return (
    <div className="relative flex flex-col md:flex-row">
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ProjectsGrid />
          </Route>
          {projectData.map((project) => (
            <Route exact path={"/" + project.imgName}>
              <PageTemplate projectName={project.imgName} />
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
