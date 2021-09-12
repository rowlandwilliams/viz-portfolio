import { Route } from "react-router-dom";
import { ImgData } from "../../../types";
import { projectData } from "../../utils/projectData";
import { CodePageTemplate } from "./CodePageTemplate/CodePageTemplate";

interface Props {
  allImages: ImgData[];
}

export const CodeRoutes = ({ allImages,  }: Props) => {
  return (
    <>
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
    </>
  );
};
