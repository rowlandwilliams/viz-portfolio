import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ImgData } from "../../../../types";
import { projectData } from "../../../utils/projectData";
import { StackLabels } from "./StackLabels/StackLabels";
import { ProjectPageImages } from "./ProjectPageImages/ProjectPageImages";
import classNames from "classnames";
import { ProjectOverview } from "./ProjectOverview/ProjectOverview";
import { PageHeader } from "./PageHeader/PageHeader";
import { PageTitle } from "./PageHeader/PageTitle/PageTitle";
import { PageIcons } from "./PageHeader/PageIcons/PageIcons";

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
  const headerRef = useRef<HTMLDivElement>(null);

  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, [headerRef]);

  console.log(headerHeight);

  const project = projectData.filter(
    (project) => project.imgName === projectName
  )[0];

  const {
    projectTitle,
    projectSubTitle,
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
        "w-full p-4 md:py-0 bg-white transition-all ease-in-out duration-150 mt-24 md:mt-0 md:ml-20 md:mr-16 max-w-7xl "
      )}
    >
      <div className="relative md:ml-40">
        <div className="flex flex-col justify-between md:pb-4">
          <div className="mb-4 md:mb-0  md:pt-10 md:pb-14" ref={headerRef}>
            <div className="flex justify-between items-start font-tt-interfaces-demi">
              <PageTitle projectTitle={projectTitle} />
              <PageIcons
                backgroundColor={backgroundColor}
                clientUrl={clientUrl}
                clientName={clientName}
                repoUrl={repoUrl}
                projectUrl={projectUrl}
              />
            </div>
            <div className="f opacity-75 pt-4 ">{projectSubTitle}</div>
          </div>

          <ProjectPageImages
            projectImages={projectImages}
            projectUrl={projectUrl}
            mainImgSrc={projectImages[activeImgIndex].module.default}
            imgName={imgName}
            activeImgIndex={activeImgIndex}
            handleImageClick={handleImageClick}
            backgroundColor={backgroundColor}
            headerHeight={headerHeight}
          />
        </div>
        <ProjectOverview projectOverview={projectOverview} />
        <div className="mt-8 mb-4">{projectDescription}</div>
        <div className="text-sm my-4">
          {projectBullets.map((bullet) => (
            <div>- {bullet}</div>
          ))}
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
