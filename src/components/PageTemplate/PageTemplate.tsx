import { projectData } from "../utils/projectData";

interface Props {
  projectName: string;
}

export const PageTemplate = ({ projectName }: Props) => {
  const project = projectData.filter(
    (project) => project.imgName === projectName
  )[0];
  console.log(project);
  return (
    <div className="w-full p-4 bg-gray-100">
      <div>{project.imgName}</div>
    </div>
  );
};
