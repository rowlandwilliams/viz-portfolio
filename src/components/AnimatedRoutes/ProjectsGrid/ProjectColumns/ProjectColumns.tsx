import { ImgData } from "../../../../types";

import { LeftColumn } from "./LeftColumn/LeftColumn";
import { RightColumn } from "./RightColumn/RightColumn";

interface Props {
  allImages: ImgData[];
  handleDesktopBurgerClick: (menuIsVisible: boolean) => void;
}

export const ProjectColumns = ({
  allImages,
  handleDesktopBurgerClick,
}: Props) => {
  return (
    <div className="hidden md:flex">
      <LeftColumn
        allImages={allImages}
        handleDesktopBurgerClick={handleDesktopBurgerClick}
      />
      <RightColumn
        allImages={allImages}
        handleDesktopBurgerClick={handleDesktopBurgerClick}
      />
    </div>
  );
};
