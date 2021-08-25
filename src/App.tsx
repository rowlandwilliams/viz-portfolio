import React from "react";
import "./App.css";
import { NavBar } from "./components/Navbar/NavBar";
import { HashRouter as Router } from "react-router-dom";
import { importAllImages } from "./components/ProjectsGrid/Project/utils";
import { ImgData } from "./types";

import { SwitchComponent } from "./Switch";

const allImages: ImgData[] = importAllImages(
  require.context("./assets/img/"),
  ".jpg"
);
const App = () => {
  return (
    <div className="relative flex flex-col md:flex-row font-libre-franklin bg-gray-100">
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <SwitchComponent allImages={allImages} />
      </Router>
    </div>
  );
};

export default App;
