import { AnimatePresence } from "framer-motion";
import { Route, Switch } from "react-router-dom";
import { Bio } from "./Bio/Bio";
import { ImgData } from "../../types";
import { ProjectsGrid } from "./ProjectsGrid/ProjectsGrid";
import { DesignRoutes } from "./DesignRoutes/DesignRoutes";
import { projectData } from "../utils/projectData";
import { CodePageTemplate } from "./CodeRoutes/CodePageTemplate/CodePageTemplate";

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
          <Bio desktopMenuIsVisible={desktopMenuIsVisible} />
        </Route>
        {projectData.map((project) => (
          <Route path={"/" + project.imgName}>
            <CodePageTemplate
              key={project.imgName}
              projectName={project.imgName}
              projectImages={allImages.filter((image) => {
                const re = new RegExp(project.imgName, "g");
                return image.slug.match(re);
              })}
            />
          </Route>
        ))}
        <DesignRoutes />
      </Switch>
    </AnimatePresence>
  );
};
