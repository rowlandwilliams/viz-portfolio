import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";
import { Bio } from "./components/Bio/Bio";
import { ProjectRoutes } from "./components/ProjectRoutes/ProjectRoutes";
import { ProjectsGrid } from "./components/ProjectsGrid/ProjectsGrid";
import { ImgData } from "./types";

interface Props {
  allImages: ImgData[];
}

export const SwitchComponent = ({ allImages }: Props) => {
  const location = useLocation();
  console.log(location)
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route exact path="/">
          <ProjectsGrid allImages={allImages} />
        </Route>
        <Route path="/about">
          <Bio />
        </Route>
        <ProjectRoutes allImages={allImages} />
      </Switch>
    </AnimatePresence>
  );
};
