import { DesktopNavbar } from "./DesktopNavbar/DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar/MobileNavbar";

interface Props {
  desktopMenuIsVisible: boolean;
  handleDesktopIconClick: (menuIsVisible: boolean) => void;
  mobileMenuIsVisible: boolean;
  handleMobileIconClick: (menuIsVisible: boolean) => void;
  backgroundColors: string[];
}

export const NavBar = ({
  desktopMenuIsVisible,
  handleDesktopIconClick,
  mobileMenuIsVisible,
  handleMobileIconClick,
  backgroundColors,
}: Props) => {
  return (
    <div className="fixed flex justify-between items-center w-screen md:w-24 h-20 md:h-screen p-4 z-30">
      <DesktopNavbar
        desktopMenuIsVisible={desktopMenuIsVisible}
        handleIconClick={handleDesktopIconClick}
        backgroundColors={backgroundColors}
      />
      <MobileNavbar
        mobileMenuIsVisible={mobileMenuIsVisible}
        handleIconClick={handleMobileIconClick}
        backgroundColors={backgroundColors}
      />
    </div>
  );
};
