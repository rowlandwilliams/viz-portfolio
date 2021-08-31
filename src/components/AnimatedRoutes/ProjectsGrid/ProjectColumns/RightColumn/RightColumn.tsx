import { ImgData } from "../../../../../types";
import { projectData } from "../../../../utils/projectData";
import { Project } from "../Project/Project";

interface Props {
  allImages: ImgData[];
  handleDesktopBurgerClick: (menuIsVisible: boolean) => void;
}
export const RightColumn = ({ allImages, handleDesktopBurgerClick }: Props) => {
  return (
    <div className="w-7/12">
      {projectData.map(
        (project, i) =>
          i % 2 !== 0 && (
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
          )
      )}
    </div>
  );
};
