import React from "react";
import "./App.css";
import { NavBar } from "./components/Navbar/NavBar";
import { ProjectsGrid } from "./components/ProjectsGrid/ProjectsGrid";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { PageTemplate } from "./components/PageTemplate/PageTemplate";
import { projectData } from "./components/utils/projectData";
import { importAllImages } from "./components/ProjectsGrid/Project/utils";
import { ImgData } from "./types";

const allImages: ImgData[] = importAllImages(
  require.context("./assets/img/"),
  ".jpg"
);


function App() {
  console.log(process.env.PUBLIC_URL, process.env.PUBLIC_URL + "/");
  return (
    <div className="relative flex flex-col md:flex-row bg-gray-100 h-screen">
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ProjectsGrid />
          </Route>
          {projectData.map((project) => (
            <Route exact path={"/" + project.imgName}>
              <PageTemplate
                projectName={project.imgName}
                projectImages={allImages.filter((image) => {
                  const re = new RegExp(project.imgName, "g");
                  return image.slug.match(re);
                })}
              />
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
