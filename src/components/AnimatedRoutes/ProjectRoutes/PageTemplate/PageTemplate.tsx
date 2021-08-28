import { motion } from "framer-motion";
import { useState } from "react";
import { ImgData } from "../../../../types";
import { projectData } from "../../../utils/projectData";
import { StackLabels } from "./StackLabels/StackLabels";
import { ThirdPartyIcons } from "./ThirdPartyIcons/ThirdPartyIcons";
import { ProjectPageImages } from "./ProjectPageImages/ProjectPageImages";
import classNames from "classnames";
import { ProjectOverview } from "./ProjectOverview/ProjectOverview";

interface Props {
  projectName: string;
  projectImages: ImgData[];
  desktopMenuIsVisible: boolean;
}

export const PageTemplate = ({
  projectName,
  projectImages,
  desktopMenuIsVisible,
}: Props) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const project = projectData.filter(
    (project) => project.imgName === projectName
  )[0];

  const {
    projectTitle,
    projectOverview,
    projectUrl,
    repoUrl,
    backgroundColor,
    projectStack,
    projectDescription,
    projectBullets,
    imgName,
  } = project;

  const handleImageClick = (i: number) => {
    setActiveImgIndex(i);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={classNames(
        "w-full p-4 bg-white transition-all ease-in-out duration-150 mt-24 md:mt-0 md:p-8 md:ml-14"
      )}
    >
      <div className="relative md:ml-40">
        {/* <Chevrons /> */}
        <div className="flex justify-between items-center mb-4 md:mb-12 w-3/4 ">
          <div className="font-tt-interfaces-demi text-3xl text-gray-800">
            {projectTitle}
          </div>
        </div>
        <div className="flex flex-col">
          <ProjectPageImages
            projectImages={projectImages}
            projectUrl={projectUrl}
            mainImgSrc={projectImages[activeImgIndex].module.default}
            imgName={imgName}
            activeImgIndex={activeImgIndex}
            handleImageClick={handleImageClick}
            backgroundColor={backgroundColor}
          />
          <ProjectOverview projectOverview={projectOverview} />
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
    </motion.div>
  );
};
