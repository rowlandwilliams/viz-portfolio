import React, { useState } from "react";
import "./App.css";
import { NavBar } from "./components/Navbar/NavBar";
import { HashRouter as Router } from "react-router-dom";
import { importAllImages } from "./components/AnimatedRoutes/ProjectsGrid/Project/utils";
import { ImgData } from "./types";

import { AnimatedRoutes } from "./components/AnimatedRoutes/AnimatedRoutes";
import classNames from "classnames";
import { projectData } from "./components/utils/projectData";
import { DesktopMenuLinks } from "./components/DesktopMenu/DesktopMenuLinks/DesktopMenuLinks";

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
        <div
          className={classNames(
            "md:h-screen md:ml-24 pt-4 transition-all ease-in duration-150 overflow-hidden",
            {
              "w-28 overflow-visible px-4 opacity-100": desktopMenuIsVisible,
              "w-0 px-0 opacity-0": !desktopMenuIsVisible,
            },
            "leading-5 text-sm text-white box-border bg-" + backgroundColors[0]
          )}
        >
          <div className="font-tt-interfaces-demi text-black">
            <div>Data</div>
            <div>Visualisation</div>
            <div>Engineer</div>
          </div>
          <DesktopMenuLinks closeMenuOnLinkClick={handleDesktopBurgerClick} />
        </div>
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
