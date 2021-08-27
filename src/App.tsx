import React, { useState } from "react";
import "./App.css";
import { NavBar } from "./components/Navbar/NavBar";
import { HashRouter as Router } from "react-router-dom";
import { importAllImages } from "./components/AnimatedRoutes/ProjectsGrid/Project/utils";
import { ImgData } from "./types";

import { AnimatedRoutes } from "./components/AnimatedRoutes/AnimatedRoutes";
import classNames from "classnames";
import { projectData } from "./components/utils/projectData";
import { DesktopMenu } from "./components/Navbar/DesktopMenu/DesktopMenu";

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
  const [desktopBurgerIsVisible, setDesktopBurgerIsVisible] = useState(true);
  const handleDesktopBurgerClick = () => {
    setDesktopBurgerIsVisible(!desktopBurgerIsVisible);
  };
  console.log(desktopBurgerIsVisible);
  return (
    <div className="relative flex flex-col md:flex-row font-tt-interfaces">
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar
          desktopBurgerIsVisible={desktopBurgerIsVisible}
          handleDesktopBurgerClick={handleDesktopBurgerClick}
          backgroundColors={backgroundColors}
        />
        <div
          className={classNames(
            "md:ml-24 pt-4 transition-width ease-in duration-150",
            {
              "w-28 overflow-visible px-4 ": !desktopBurgerIsVisible,
              "w-0 overflow-hidden px-0": desktopBurgerIsVisible,
            },
            "leading-5 text-sm text-white box-border bg-" + backgroundColors[0]
          )}
          style={{ transition: "padding 150ms" }}
        >
          <div className="font-tt-interfaces-demi text-black">
            <div>Data</div>
            <div>Visualisation</div>
            <div>Engineer</div>
          </div>
          <DesktopMenu />
        </div>
        <AnimatedRoutes allImages={allImages} />
      </Router>
    </div>
  );
};

export default App;
