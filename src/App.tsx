import React from "react";
import "./App.css";
import { NavBar } from "./components/Navbar/NavBar";
import { HashRouter as Router } from "react-router-dom";
import { importAllImages } from "./components/AnimatedRoutes/ProjectsGrid/Project/utils";
import { ImgData } from "./types";

import { AnimatedRoutes } from "./components/AnimatedRoutes/AnimatedRoutes";

const allImages: ImgData[] = importAllImages(
  require.context("./assets/img/"),
  ".jpg"
);
const App = () => {
  return (
    <div className="relative flex flex-col md:flex-row font-libre-franklin bg-gray-100">
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <AnimatedRoutes allImages={allImages} />
      </Router>
    </div>
  );
};

export default App;
