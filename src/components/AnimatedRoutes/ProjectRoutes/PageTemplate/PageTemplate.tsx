import { motion } from "framer-motion";
import { useState } from "react";
import { ImgData } from "../../../../types";
import { projectData } from "../../../utils/projectData";
import { StackLabels } from "./StackLabels/StackLabels";
import { ProjectPageImages } from "./ProjectPageImages/ProjectPageImages";
import classNames from "classnames";
import { ProjectOverview } from "./ProjectOverview/ProjectOverview";
import { PageHeader } from "./PageHeader/PageHeader";

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
    clientUrl,
    clientName,
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
        "w-full p-4 bg-white transition-all ease-in-out duration-150 mt-24 md:mt-0 md:p-8 md:ml-14 md:mr-36 max-w-7xl"
      )}
    >
      <div className="relative md:ml-40">
        <PageHeader
          projectTitle={projectTitle}
          backgroundColor={backgroundColor}
          clientUrl={clientUrl}
          clientName={clientName}
          repoUrl={repoUrl}
          projectUrl={projectUrl}
        />
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
      </div>
    </motion.div>
  );
};
