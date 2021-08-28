import { Route } from "react-router-dom";
import { ImgData } from "../../../types";
import { projectData } from "../../utils/projectData";
import { PageTemplate } from "./PageTemplate/PageTemplate";

interface Props {
  allImages: ImgData[];
  desktopMenuIsVisible: boolean;
}

export const ProjectRoutes = ({ allImages, desktopMenuIsVisible }: Props) => {
  return (
    <>
      {projectData.map((project) => (
        <Route exact path={"/" + project.imgName}>
          <PageTemplate
            projectName={project.imgName}
            projectImages={allImages.filter((image) => {
              const re = new RegExp(project.imgName, "g");
              return image.slug.match(re);
            })}
            desktopMenuIsVisible={desktopMenuIsVisible}
          />
        </Route>
      ))}
    </>
  );
};
