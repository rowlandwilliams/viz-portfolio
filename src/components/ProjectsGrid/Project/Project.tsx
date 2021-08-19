import { Link } from "react-router-dom";
import { ProjectHoverText } from "./ProjectHoverText/ProjectHoverText";

interface Props {
  imgName: string;
  projectTitle: string;
  projectStack: string[];
  backgroundColor: string;
  projectThumbnail: string;
}

export const Project = ({
  imgName,
  projectTitle,
  projectStack,
  backgroundColor,
  projectThumbnail,
}: Props) => {
  return (
    <div className="w-full md:w-auto mx-2 mb-4">
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
