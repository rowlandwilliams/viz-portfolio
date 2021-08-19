import React from "react";
import "./App.css";
import { NavBar } from "./components/Navbar/NavBar";
import { ProjectsGrid } from "./components/ProjectsGrid/ProjectsGrid";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { importAllImages } from "./components/ProjectsGrid/Project/utils";
import { ImgData } from "./types";
import { ProjectRoutes } from "./components/ProjectRoutes/ProjectRoutes";

const allImages: ImgData[] = importAllImages(
  require.context("./assets/img/"),
  ".jpg"
);
const App = () => {
  return (
    <div className="relative flex flex-col md:flex-row font-inter bg-gray-100">
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ProjectsGrid allImages={allImages} />
          </Route>
          <ProjectRoutes allImages={allImages} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
