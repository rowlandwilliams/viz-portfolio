import { ImgData } from "../../../types";
import classNames from "classnames";

interface Props {
  imgIndex: number;
  projectImages: ImgData[];
  handleImageClick: (i: number) => void;
  backgroundColor: string;
}

export const ImageSlider = ({
  imgIndex,
  projectImages,
  handleImageClick,
  backgroundColor,
}: Props) => {
  return (
    <div className="flex">
      {projectImages.map((imageObject, i) => (
        <div className="relative">
          <img
            onClick={() => handleImageClick(i)}
            src={imageObject.module.default}
            alt={imageObject.module.default}
            className={classNames(
              `h-28 border-2 border-transparent hover:border-${backgroundColor}`,
              { hidden: imgIndex === i }
            )}
          ></img>
        </div>
      ))}
    </div>
  );
};
