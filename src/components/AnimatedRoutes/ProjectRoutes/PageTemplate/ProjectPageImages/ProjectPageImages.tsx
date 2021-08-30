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
  headerHeight: number;
}

export const ProjectPageImages = ({
  projectImages,
  projectUrl,
  mainImgSrc,
  imgName,
  activeImgIndex,
  handleImageClick,
  backgroundColor,
  headerHeight,
}: Props) => {
  const imgHeight = window.innerHeight - headerHeight - 40 - 15 - 12;
  return (
    <div className="flex flex-col justify-end md:items-baseline md:mb-2">
      <MainImage
        projectUrl={projectUrl}
        mainImgSrc={mainImgSrc}
        imgName={imgName}
        imgHeight={imgHeight}
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
