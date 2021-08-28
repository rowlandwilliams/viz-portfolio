import classNames from "classnames";
import { motion } from "framer-motion";
import { ImgData } from "../../../types";
import { ProjectColumns } from "./ProjectColumns/ProjectColumns";

interface Props {
  allImages: ImgData[];
  desktopMenuIsVisible: boolean;
  handleDesktopBurgerClick: (menuIsVisible: boolean) => void;
}

export const ProjectsGrid = ({
  allImages,
  desktopMenuIsVisible,
  handleDesktopBurgerClick,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={classNames(
          "h-auto flex p-4 pb-0 transition-all ease-in-out duration-150 md:p-4",
          {
            "md:ml-28": !desktopMenuIsVisible,
            "md:ml-56": desktopMenuIsVisible,
          }
        )}
      >
        <ProjectColumns
          allImages={allImages}
          handleDesktopBurgerClick={handleDesktopBurgerClick}
        />
      </div>
    </motion.div>
  );
};