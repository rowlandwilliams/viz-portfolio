import { Route } from "react-router-dom";
import { ImgData } from "../../../types";
import { projectData } from "../../utils/projectData";
import { PageTemplate } from "./CodePageTemplate/CodePageTemplate";

interface Props {
  allImages: ImgData[];
  desktopMenuIsVisible: boolean;
}

export const CodeRoutes = ({ allImages, desktopMenuIsVisible }: Props) => {
  return (
    <>
      {projectData.map((project) => (
        <Route exact path={"/" + project.imgName}>
          <PageTemplate
            key={project.imgName}
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
