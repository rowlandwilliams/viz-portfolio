import { useState } from "react";
import { ImgData } from "../../types";
import { projectData } from "../utils/projectData";
import { ImageSlider } from "./ImageSlider/ImageSlider";
import { MainImage } from "./MainImage/MainImage";

interface Props {
  projectName: string;
  projectImages: ImgData[];
}

export const PageTemplate = ({ projectName, projectImages }: Props) => {
  const [imgIndex, setImgIndex] = useState(0);

  const project = projectData.filter(
    (project) => project.imgName === projectName
  )[0];

  const handleImageClick = (i: number) => {
    setImgIndex(i);
  };

  return (
    <div className="w-full p-4">
      <div>{project.imgName}</div>
      <div className="flex flex-col items-center">
        <MainImage
          projectUrl={project.projectUrl}
          mainImgSrc={projectImages[imgIndex].module.default}
          imgName={project.imgName}
        />
        <ImageSlider
          imgIndex={imgIndex}
          handleImageClick={handleImageClick}
          backgroundColor={project.backgroundColor}
          projectImages={projectImages}
        />
      </div>
    </div>
  );
};
