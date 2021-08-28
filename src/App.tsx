import React, { useState } from "react";
import "./App.css";
import { NavBar } from "./components/Navbar/NavBar";
import { HashRouter as Router } from "react-router-dom";
import { importAllImages } from "./components/AnimatedRoutes/ProjectsGrid/ProjectColumns/Project/utils";
import { ImgData } from "./types";
import { AnimatedRoutes } from "./components/AnimatedRoutes/AnimatedRoutes";
import { projectData } from "./components/utils/projectData";

const allImages: ImgData[] = importAllImages(
  require.context("./assets/img/"),
  ".jpg"
);

// select 2 random bg colors
const backgroundColors = projectData
  .map((project) => project.backgroundColor)
  .sort(() => 0.5 - Math.random())
  .slice(0, 2);

const App = () => {
  const [desktopMenuIsVisible, setDesktopMenuIsVisible] = useState(false);
  const [mobileMenuIsVisible, setMobileMenuIsVisible] = useState(false);

  const handleDesktopBurgerClick = (menuIsVisible: boolean) => {
    setDesktopMenuIsVisible(menuIsVisible);
  };

  const handleMobileBurgerClick = (menuIsVisible: boolean) => {
    setMobileMenuIsVisible(menuIsVisible);
  };

  return (
    <div className="relative flex flex-col md:flex-row font-tt-interfaces">
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar
          desktopMenuIsVisible={desktopMenuIsVisible}
          handleDesktopIconClick={handleDesktopBurgerClick}
          mobileMenuIsVisible={mobileMenuIsVisible}
          handleMobileIconClick={handleMobileBurgerClick}
          backgroundColors={backgroundColors}
        />
        <AnimatedRoutes
          allImages={allImages}
          desktopMenuIsVisible={desktopMenuIsVisible}
          handleDesktopBurgerClick={handleDesktopBurgerClick}
        />
      </Router>
    </div>
  );
};

export default App;
