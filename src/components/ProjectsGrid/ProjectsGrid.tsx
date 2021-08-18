import { ImgData } from "../../types";
import { projectData } from "../utils/projectData";
import { Project } from "./Project/Project";

interface Props {
  allImages: ImgData[];
}

export const ProjectsGrid = ({ allImages }: Props) => {
  return (
    <div className="flex bg-gray-100 p-4">
      {projectData.map((project) => (
        <Project
          imgName={project.imgName}
          projectTitle={project.projectTitle}
          projectStack={project.projectStack}
          backgroundColor={project.backgroundColor}
          projectThumbnail={
            allImages.filter((imageObj) => {
              const re = new RegExp(project.imgName, "g");
              return imageObj.slug.match(re);
            })[0].module.default
          }
        />
      ))}
    </div>
  );
};
