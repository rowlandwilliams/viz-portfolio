import { DesktopNavbarAndMenu } from "./DesktopNavbarAndMenu/DesktopNavbarAndMenu";
import { MobileNavbarAndMenu } from "./MobileNavbarAndMenu/MobileNavbarAndMenu";

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
    <div className="fixed flex justify-between items-center w-screen md:w-24 h-20 md:h-screen z-30">
      <DesktopNavbarAndMenu
        desktopMenuIsVisible={desktopMenuIsVisible}
        handleIconClick={handleDesktopIconClick}
        backgroundColors={backgroundColors}
      />
      <MobileNavbarAndMenu
        mobileMenuIsVisible={mobileMenuIsVisible}
        handleIconClick={handleMobileIconClick}
        backgroundColors={backgroundColors}
      />
    </div>
  );
};
