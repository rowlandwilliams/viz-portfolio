import { motion } from "framer-motion";
import { ImgData } from "../../../types";
import { projectData } from "../../utils/projectData";
import { Project } from "./Project/Project";

interface Props {
  allImages: ImgData[];
}

export const ProjectsGrid = ({ allImages }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-auto flex p-4 pb-0 md:p-4 mt-20 md:mt-0">
        <div className="w-5/12">
          {projectData.map(
            (project, i) =>
              i % 2 === 0 && (
                <Project
                  key={project.imgName}
                  imgName={project.imgName}
                  projectTitle={project.projectTitle}
                  projectStack={project.projectStack}
                  backgroundColor={project.backgroundColor}
                  projectThumbnail={
                    allImages.filter((imageObj) => {
                      const re = new RegExp(project.imgName, "g");
                      return imageObj.slug.match(re);
                    })[0].module.default
                  }
                />
              )
          )}
        </div>
        <div className="w-7/12">
          {projectData.map(
            (project, i) =>
              i % 2 !== 0 && (
                <Project
                  key={project.imgName}
                  imgName={project.imgName}
                  projectTitle={project.projectTitle}
                  projectStack={project.projectStack}
                  backgroundColor={project.backgroundColor}
                  projectThumbnail={
                    allImages.filter((imageObj) => {
                      const re = new RegExp(project.imgName, "g");
                      return imageObj.slug.match(re);
                    })[0].module.default
                  }
                />
              )
          )}
        </div>
      </div>
    </motion.div>
  );
};
