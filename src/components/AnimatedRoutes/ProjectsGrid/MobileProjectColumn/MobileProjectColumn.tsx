import { ImgData } from "../../../../types";
import { projectData } from "../../../utils/projectData";
import { Project } from "../ProjectColumns/Project/Project";

interface Props {
  allImages: ImgData[];
  handleDesktopBurgerClick: (menuIsVisible: boolean) => void;
}

export const MobileProjectColumn = ({
  allImages,
  handleDesktopBurgerClick,
}: Props) => {
  return (
    <div className="md:hidden w-full">
      {projectData.map((project) => (
        <Project
          key={project.imgName}
          imgName={project.imgName}
          projectTitle={project.projectTitle}
          backgroundColor={project.backgroundColor}
          projectThumbnail={
            allImages.filter((imageObj) => {
              const re = new RegExp(project.imgName, "g");
              return imageObj.slug.match(re);
            })[0].module.default
          }
          handleDesktopBurgerClick={handleDesktopBurgerClick}
        />
      ))}
    </div>
  );
};
