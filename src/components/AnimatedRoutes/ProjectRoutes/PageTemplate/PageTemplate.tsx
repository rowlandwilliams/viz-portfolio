import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ImgData } from "../../../../types";
import { projectData } from "../../../utils/projectData";
import { ProjectPageImages } from "./ProjectPageImages/ProjectPageImages";
import classNames from "classnames";
import { PageTitle } from "./PageHeader/PageTitle/PageTitle";
import { PageIcons } from "./PageHeader/PageIcons/PageIcons";
import { setImgHeightOnWindowSize } from "./utils/utils";
import { PageTextTemplate } from "./PageTextTemplate/PageTextTemplate";
import { ProjectDetails } from "./ProjectDetails/ProjectDetails";

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

  const [imgHeight, setImgHeight] = useState(0);

  // scroll top on load
  // window.scrollTo(0, 0);

  // dynamically set img size depending on screen size
  useEffect(() => {
    const { current } = headerRef;
    if (current) {
      setImgHeightOnWindowSize(current, setImgHeight);

      // add resize listener
      window.addEventListener("resize", () => {
        setImgHeightOnWindowSize(current, setImgHeight);
      });
      return () => {
        window.removeEventListener("resize", () => {
          setImgHeightOnWindowSize(current, setImgHeight);
        });
      };
    }
  }, []);

  const project = projectData.filter(
    (project) => project.imgName === projectName
  )[0];

  const {
    projectTitle,
    projectSubTitle,
    clientUrl,
    clientName,
    projectOverview,
    projectProblem,
    projectSolution,
    projectUrl,
    repoUrl,
    backgroundColor,
    imgName,
    projectTechnologies,
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
            imgHeight={imgHeight}
          />
        </div>
        <PageTextTemplate
          headerText="Overview"
          sectionParagraphs={projectOverview}
        />
        <PageTextTemplate
          headerText="The Problem"
          sectionParagraphs={projectProblem}
        />
        <PageTextTemplate
          headerText="The Solution"
          sectionParagraphs={projectSolution}
        />
        <ProjectDetails
          clientUrl={clientUrl}
          projectTechnologies={projectTechnologies}
        />
      </div>
    </motion.div>
  );
};
