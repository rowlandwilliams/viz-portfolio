import { useState } from "react";
import { ImgData } from "../../types";
import { projectData } from "../utils/projectData";

interface Props {
  projectName: string;
  projectImages: ImgData[];
}

export const PageTemplate = ({ projectName, projectImages }: Props) => {
  const [imgIndex, setImgIndex] = useState(0);

  const project = projectData.filter(
    (project) => project.imgName === projectName
  )[0];

  console.log(imgIndex);
  const slideShowImages = projectImages.slice(1);
  return (
    <div className="w-full p-4">
      <div>{project.imgName}</div>
      <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
        <div className="flex justify-center h-auto">
          <img
            src={projectImages[imgIndex].module.default}
            alt={project.imgName}
            className="w-full max-w-3xl py-4"
          />
        </div>
      </a>
      <div className="flex">
        {projectImages.map((imageObject, i) => (
          <img
            onClick={() => setImgIndex(i)}
            src={imageObject.module.default}
            alt={imageObject.module.default}
            className={`h-28 border-2 border-transparent hover:border-${project.backgroundColor}`}
          ></img>
        ))}
      </div>
    </div>
  );
};
