import { Link } from "react-router-dom";
import { ProjectHoverText } from "./ProjectHoverText/ProjectHoverText";

interface Props {
  imgName: string;
  projectTitle: string;
  backgroundColor: string;
  projectThumbnail: string;
  handleDesktopBurgerClick: (menuIsVisible: boolean) => void;
}

export const Project = ({
  imgName,
  projectTitle,
  backgroundColor,
  projectThumbnail,
  handleDesktopBurgerClick,
}: Props) => {
  return (
    <div
      className="mx-2 mb-4 md:rounded-md overflow-hidden"
      onClick={() => handleDesktopBurgerClick(false)}
    >
      <Link to={imgName}>
        <div className="relative">
          <img src={projectThumbnail} alt={imgName} />
          <ProjectHoverText
            projectTitle={projectTitle}
            backgroundColor={backgroundColor}
          />
        </div>
      </Link>
    </div>
  );
};
