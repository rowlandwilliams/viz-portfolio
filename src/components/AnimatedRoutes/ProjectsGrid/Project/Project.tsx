import { Link } from "react-router-dom";
import { ProjectHoverText } from "./ProjectHoverText/ProjectHoverText";

interface Props {
  imgName: string;
  projectTitle: string;
  projectStack: string[];
  backgroundColor: string;
  projectThumbnail: string;
  handleDesktopBurgerClick: (menuIsVisible: boolean) => void;
}

export const Project = ({
  imgName,
  projectTitle,
  projectStack,
  backgroundColor,
  projectThumbnail,
  handleDesktopBurgerClick,
}: Props) => {
  return (
    <div className="mx-2 mb-4" onClick={() => handleDesktopBurgerClick(false)}>
      <Link to={imgName}>
        <div className="relative">
          <img src={projectThumbnail} alt={imgName} />
          <ProjectHoverText
            projectTitle={projectTitle}
            projectStack={projectStack}
            backgroundColor={backgroundColor}
          />
        </div>
      </Link>
    </div>
  );
};
