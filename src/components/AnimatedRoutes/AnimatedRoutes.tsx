import { AnimatePresence } from "framer-motion";
import { Route, Switch } from "react-router-dom";
import { Bio } from "./Bio/Bio";
import { ImgData } from "../../types";
import { ProjectsGrid } from "./ProjectsGrid/ProjectsGrid";
import { ProjectRoutes } from "./ProjectRoutes/ProjectRoutes";

interface Props {
  allImages: ImgData[];
}

export const AnimatedRoutes = ({ allImages }: Props) => {
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
