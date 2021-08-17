import { ImgData } from "../../../types";
import { ProjectHoverText } from "./ProjectHoverText/ProjectHoverText";
import { importAllImages } from "./utils";

const images: ImgData[] = importAllImages(
  require.context("../../../assets/img/"),
  ".jpg"
);

interface Props {
  imgName: string;
  projectTitle: string;
  projectStack: string[];
  backgroundColor: string;
}

export const Project = ({
  imgName,
  projectTitle,
  projectStack,
  backgroundColor,
}: Props) => {
  return (
    <div className="w-full md:w-auto mx-2">
      <div className="relative">
        <img
          src={images.filter((img) => img.slug === imgName)[0].module.default}
          alt="suh"
          className="relative"
        />
        <ProjectHoverText
          projectTitle={projectTitle}
          projectStack={projectStack}
          backgroundColor={backgroundColor}
        />
      </div>
    </div>
  );
};
