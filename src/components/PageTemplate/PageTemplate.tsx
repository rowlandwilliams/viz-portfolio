import { useState } from "react";
import { ImgData } from "../../types";
import { importAllImages } from "../ProjectsGrid/Project/utils";
import { projectData } from "../utils/projectData";
import { ImageSlider } from "./ImageSlider/ImageSlider";
import { MainImage } from "./MainImage/MainImage";
import { StackLabels } from "./StackLabels/StackLabels";
import { ThirdPartyIcons } from "./ThirdPartyIcons/ThirdPartyIcons";

interface Props {
  projectName: string;
  projectImages: ImgData[];
}

const icons = importAllImages(
  require.context("../../assets/img/icons/"),
  ".svg"
);
console.log(icons);

export const PageTemplate = ({ projectName, projectImages }: Props) => {
  const [imgIndex, setImgIndex] = useState(0);

  const project = projectData.filter(
    (project) => project.imgName === projectName
  )[0];

  const {
    projectTitle,
    projectUrl,
    repoUrl,
    backgroundColor,
    projectStack,
    projectDescription,
    imgName,
  } = project;

  const handleImageClick = (i: number) => {
    setImgIndex(i);
  };

  return (
    <div className="w-full p-4">
      <div className="flex justify-between items-center mb-4 md:mb-8">
        <div className="text-xl">{projectTitle}</div>
        <StackLabels
          projectStack={projectStack}
          backgroundColor={backgroundColor}
        />
      </div>
      <div className="flex flex-col items-center">
        <MainImage
          projectUrl={projectUrl}
          mainImgSrc={projectImages[imgIndex].module.default}
          imgName={imgName}
        />
        <ImageSlider
          imgIndex={imgIndex}
          handleImageClick={handleImageClick}
          backgroundColor={backgroundColor}
          projectImages={projectImages}
        />
        <div className="my-8 px-2">{projectDescription}</div>
        <StackLabels
          projectStack={projectStack}
          backgroundColor={backgroundColor}
          isDesktop
        />
        <ThirdPartyIcons
          backgroundColor={backgroundColor}
          repoUrl={repoUrl}
          projectUrl={projectUrl}
        />
      </div>
    </div>
  );
};
