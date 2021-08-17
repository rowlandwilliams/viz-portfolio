import { Project } from "./Project/Project";

const projectData = [
  {
    imgName: "stock-chart",
    projectTitle: "Stock-chart",
    projectStack: ["d3.js", "React"],
    backgroundColor: "stock_pink",
  },
  {
    imgName: "supernova",
    projectTitle: "Supernova AI Discovery",
    projectStack: ["d3.js", "React"],
    backgroundColor: "globe_blue",
  },
];

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
