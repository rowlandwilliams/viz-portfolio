import classNames from "classnames";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  i: number;
  handleImageClick: (i: number) => void;
  activeImgIndex: number;
  backgroundColor: string;
}

const sliderHeight = 40;
const circleGroupWidth = 30;
const circlePadding = 4;
const outerCircleRadius = circleGroupWidth / 2 - circlePadding;
const innerCircleRadius = circleGroupWidth / 4 - circlePadding;

export const CircleGroup = ({
  i,
  handleImageClick,
  activeImgIndex,
  backgroundColor,
}: Props) => {
  const isActive = activeImgIndex === i;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <g
      onClick={() => handleImageClick(i)}
      className={isActive ? "pointer-events-none" : "cursor-pointer"}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.circle
        animate={{ r: isActive ? outerCircleRadius : outerCircleRadius * 0.75 }}
        transition={{ duration: 0.5 }}
        cx={circleGroupWidth * i + circleGroupWidth / 2}
        cy={sliderHeight / 2}
        fillOpacity={0}
        className={classNames("stroke-current", {
          ["text-" + backgroundColor]: isActive,
          "text-black text-opacity-60": !isActive || isHovered,
        })}
      ></motion.circle>
      <circle
        cx={circleGroupWidth * i + circleGroupWidth / 2}
        cy={sliderHeight / 2}
        r={innerCircleRadius}
        fill="red"
        className={classNames("fill-current", {
          ["text-" + backgroundColor]: isActive || isHovered,
          "text-black text-opacity-60": !isActive && !isHovered,
        })}
      ></circle>
    </g>
  );
};
