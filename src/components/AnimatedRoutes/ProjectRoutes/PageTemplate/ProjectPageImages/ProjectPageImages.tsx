import { ImgData } from "../../../../../types";
import { ImageSlider } from "./ImageSlider/ImageSlider";
import { MainImage } from "./MainImage/MainImage";

interface Props {
  projectImages: ImgData[];
  projectUrl: string | undefined;
  mainImgSrc: string;
  imgName: string;
  activeImgIndex: number;
  handleImageClick: (i: number) => void;
  backgroundColor: string;
}

export const ProjectPageImages = ({
  projectImages,
  projectUrl,
  mainImgSrc,
  imgName,
  activeImgIndex,
  handleImageClick,

  backgroundColor,
}: Props) => {
  return (
    <div className="flex flex-col items-center md:items-baseline md:mb-12">
      <MainImage
        projectUrl={projectUrl}
        mainImgSrc={mainImgSrc}
        imgName={imgName}
      />
      {projectImages.length > 1 && (
        <ImageSlider
          activeImgIndex={activeImgIndex}
          handleImageClick={handleImageClick}
          backgroundColor={backgroundColor}
          projectImages={projectImages}
        />
      )}
    </div>
  );
};
