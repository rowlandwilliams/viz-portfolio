import { motion } from "framer-motion";
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
const circlePadding = 4;
const outerCircleRadius = circleGroupWidth / 2 - circlePadding;
const innerCircleRadius = circleGroupWidth / 4 - circlePadding;

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
