import { ImgData } from "../../../../../types";
import { projectData } from "../../../../utils/projectData";
import { Project } from "../../Project/Project";

interface Props {
  allImages: ImgData[];
  handleDesktopBurgerClick: (menuIsVisible: boolean) => void;
}
export const LeftColumn = ({ allImages, handleDesktopBurgerClick }: Props) => {
  return (
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
              handleDesktopBurgerClick={handleDesktopBurgerClick}
            />
          )
      )}
    </div>
  );
};
