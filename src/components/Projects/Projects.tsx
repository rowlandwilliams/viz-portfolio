import { Project } from "./Project/Project";
import { projectData } from "./utils";

export const Projects = () => {
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
