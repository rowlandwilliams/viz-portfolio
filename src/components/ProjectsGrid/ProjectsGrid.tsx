import { projectData } from "../utils/projectData";
import { Project } from "./Project/Project";

export const ProjectsGrid = () => {
  return (
    <div className="flex bg-gray-100 p-4">
      {projectData.map((project) => (
        <Project
          imgName={project.imgName}
          projectTitle={project.projectTitle}
          projectStack={project.projectStack}
          backgroundColor={project.backgroundColor}
        />
      ))}
    </div>
  );
};
