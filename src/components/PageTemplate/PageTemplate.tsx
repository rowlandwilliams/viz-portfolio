import { motion } from "framer-motion";
import { useState } from "react";
import { ImgData } from "../../types";
import { projectData } from "../utils/projectData";
import { ImageSlider } from "./ImageSlider/ImageSlider";
import { MainImage } from "./MainImage/MainImage";
import { StackLabels } from "./StackLabels/StackLabels";
import { ThirdPartyIcons } from "./ThirdPartyIcons/ThirdPartyIcons";

interface Props {
  projectName: string;
  projectImages: ImgData[];
}

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
    projectBullets,
    imgName,
  } = project;

  const handleImageClick = (i: number) => {
    setImgIndex(i);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full p-4 mt-20 md:mt-0 md:ml-60 bg-gray-100"
    >
      <div >
        <div className="flex justify-between items-center mb-4 md:mb-8">
          <div>{projectTitle}</div>
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
          <div className="px-2 text-center">
            <div className="mt-8 mb-4">{projectDescription}</div>
            <div className="text-sm my-4">
              {projectBullets.map((bullet) => (
                <div>- {bullet}</div>
              ))}
            </div>
          </div>
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
    </motion.div>
  );
};
