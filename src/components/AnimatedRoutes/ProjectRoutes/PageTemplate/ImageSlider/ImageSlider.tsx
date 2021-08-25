import classNames from "classnames";
import { ImgData } from "../../../../../types";

interface Props {
  imgIndex: number;
  projectImages: ImgData[];
  handleImageClick: (i: number) => void;
  backgroundColor: string;
}
const sliderHeight = 40;
const circleGroupWidth = 40;
const circlePadding = 4;
const outerCircleRadius = circleGroupWidth / 2 - circlePadding;
const innerCircleRadius = circleGroupWidth / 4 - circlePadding;

export const ImageSlider = ({
  imgIndex,
  projectImages,
  handleImageClick,
  backgroundColor,
}: Props) => {
  const nImages = projectImages.length;
  console.log(imgIndex);
  return (
    <svg width={circleGroupWidth * nImages + "px"} height={sliderHeight}>
      {projectImages.map((image, i) => (
        <g onClick={() => handleImageClick(i)} className="cursor-pointer">
          <circle
            cx={circleGroupWidth * i + circleGroupWidth / 2}
            cy={sliderHeight / 2}
            r={imgIndex === i ? outerCircleRadius : outerCircleRadius * 0.75}
            fill-opacity={0}
            className={classNames("stroke-current", {
              ["text-" + backgroundColor]: imgIndex === i,
              "text-black text-opacity-60": imgIndex !== i,
            })}
          >
            {imgIndex === i && (
              <animate
                attributeName="r"
                begin="0s"
                dur="3s"
                repeatCount={1}
                from={outerCircleRadius * 0.75}
                to={outerCircleRadius}
              />
            )}
          </circle>
          <circle
            cx={circleGroupWidth * i + circleGroupWidth / 2}
            cy={sliderHeight / 2}
            r={innerCircleRadius}
            fill="red"
            className={classNames(
              "fill-current",
              {
                ["text-" + backgroundColor]: imgIndex === i,
                "text-black text-opacity-60": imgIndex !== i,
              },
              "hover:text-" + backgroundColor
            )}
          ></circle>
        </g>
      ))}
    </svg>
  );
};
