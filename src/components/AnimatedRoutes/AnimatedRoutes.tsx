import { AnimatePresence } from "framer-motion";
import { Route, Switch } from "react-router-dom";
import { Bio } from "./Bio/Bio";
import { ImgData } from "../../types";
import { ProjectsGrid } from "./ProjectsGrid/ProjectsGrid";
import { ProjectRoutes } from "./ProjectRoutes/ProjectRoutes";

interface Props {
  allImages: ImgData[];
  desktopMenuIsVisible: boolean;
  handleDesktopBurgerClick: (menuIsVisible: boolean) => void;
}

export const AnimatedRoutes = ({
  allImages,
  desktopMenuIsVisible,
  handleDesktopBurgerClick,
}: Props) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route exact path="/">
          <ProjectsGrid
            allImages={allImages}
            desktopMenuIsVisible={desktopMenuIsVisible}
            handleDesktopBurgerClick={handleDesktopBurgerClick}
          />
        </Route>
        <Route path="/about">
          <Bio />
        </Route>
        <ProjectRoutes allImages={allImages} />
      </Switch>
    </AnimatePresence>
  );
};
