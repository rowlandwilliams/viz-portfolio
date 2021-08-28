import { DesktopNavbar } from "./DesktopNavbar/DesktopNavbar";
import { DesktopMenu } from "./DesktopMenu/DesktopMenu";

interface Props {
  desktopMenuIsVisible: boolean;
  handleIconClick: (menuIsVisible: boolean) => void;
  backgroundColors: string[];
}

export const DesktopNavbarAndMenu = ({
  desktopMenuIsVisible,
  handleIconClick,
  backgroundColors,
}: Props) => {
  return (
    <div className="hidden md:flex h-full">
      <DesktopNavbar
        desktopMenuIsVisible={desktopMenuIsVisible}
        handleIconClick={handleIconClick}
        backgroundColors={backgroundColors}
      />
      <DesktopMenu
        desktopMenuIsVisible={desktopMenuIsVisible}
        handleIconClick={handleIconClick}
        backgroundColors={backgroundColors}
      />
    </div>
  );
};
