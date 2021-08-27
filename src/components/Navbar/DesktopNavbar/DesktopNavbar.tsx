import { NavIconSwitch } from "../Icons/NavIconSwitch/NavIconSwitch";
import { SocialIcons } from "../Icons/SocialIcons/SocialIcons";
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
    <div className="hidden md:flex flex-col md:h-full justify-between items-center">
      <div className="relative">
        <NavIconSwitch
          handleIconClick={handleIconClick}
          menuIsVisible={desktopMenuIsVisible}
          backgroundColors={backgroundColors}
        />
        <DesktopHeader menuIsVisible={desktopMenuIsVisible} />
      </div>
      <SocialIcons />
    </div>
  );
};
