import { ImgData } from "../../../../../types";
import { CircleGroup } from "./CircleGroup/CircleGroup";

interface Props {
  activeImgIndex: number;
  projectImages: ImgData[];
  handleImageClick: (i: number) => void;
  backgroundColor: string;
}
const sliderHeight = 40;
const circleGroupWidth = 30;

export const ImageSlider = ({
  activeImgIndex,
  projectImages,
  handleImageClick,
  backgroundColor,
}: Props) => {
  const nImages = projectImages.length;
  return (
    <svg width={circleGroupWidth * nImages + "px"} height={sliderHeight}>
      {projectImages.map((image, i) => (
        <CircleGroup
          i={i}
          handleImageClick={handleImageClick}
          activeImgIndex={activeImgIndex}
          backgroundColor={backgroundColor}
        />
      ))}
    </svg>
  );
};
