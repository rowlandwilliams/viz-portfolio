import { Route } from "react-router-dom";
import { ImgData } from "../../types";
import { PageTemplate } from "../PageTemplate/PageTemplate";
import { projectData } from "../utils/projectData";

interface Props {
  allImages: ImgData[];
}

export const ProjectRoutes = ({ allImages }: Props) => {
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
          />
        </Route>
      ))}
    </>
  );
};
