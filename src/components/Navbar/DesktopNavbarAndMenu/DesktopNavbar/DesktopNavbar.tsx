import { NavIconSwitch } from "../../NavbarSocialIcons/NavIconSwitch/NavIconSwitch";
import { NavbarSocialIcons } from "../../NavbarSocialIcons/SocialIcons/NavbarSocialIcons";
import { DesktopHeader } from "./DesktopHeader/DesktopHeader";

interface Props {
  desktopMenuIsVisible: boolean;
  handleIconClick: (menuIsVisible: boolean) => void;
  backgroundColors: string[];
}

export const DesktopNavbar = ({
  desktopMenuIsVisible,
  handleIconClick,
  backgroundColors,
}: Props) => {
  return (
    <div className="flex flex-col justify-between items-center md:h-full w-28 pt-8 pb-4">
      <div className="relative">
        <NavIconSwitch
          handleIconClick={handleIconClick}
          menuIsVisible={desktopMenuIsVisible}
          backgroundColors={backgroundColors}
        />
        <DesktopHeader menuIsVisible={desktopMenuIsVisible} />
      </div>
      <NavbarSocialIcons hoverColor={backgroundColors[0]} />
    </div>
  );
};
