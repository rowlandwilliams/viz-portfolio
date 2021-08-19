interface Props {
  projectUrl: string | undefined;
  mainImgSrc: string;
  imgName: string;
}

export const MainImage = ({ projectUrl, mainImgSrc, imgName }: Props) => {
  return (
    <a href={projectUrl} target="_blank" rel="noopener noreferrer">
      <div className="flex justify-center md:h-144 transition-opacity duration-700">
        <img src={mainImgSrc} alt={imgName} className="w-full max-w-3xl py-4" />
      </div>
    </a>
  );
};
