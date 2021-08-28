import { DesktopMenuLinks } from "../../DesktopMenu/DesktopMenuLinks/DesktopMenuLinks";
import { NavIconSwitch } from "../Icons/NavIconSwitch/NavIconSwitch";
import { SocialIcons } from "../Icons/SocialIcons/SocialIcons";
import { DesktopHeader } from "./DesktopHeader/DesktopHeader";
import classNames from "classnames";

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
    <div className="hidden md:flex h-full">
      <div className="flex flex-col justify-between items-center md:h-full w-28 pt-8 pb-4">
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
      <div
        className={classNames(
          "md:h-screen pt-4 transition-all ease-in-out duration-150 overflow-hidden",
          {
            "w-28 overflow-visible px-4 opacity-100": desktopMenuIsVisible,
            "w-0 px-0 opacity-0": !desktopMenuIsVisible,
          },
          "leading-5 text-sm text-white box-border bg-" + backgroundColors[0]
        )}
      >
        <div className="font-tt-interfaces-demi text-black">
          <div>Data</div>
          <div>Visualisation</div>
          <div>Engineer</div>
        </div>
        <DesktopMenuLinks closeMenuOnLinkClick={handleIconClick} />
      </div>
    </div>
  );
};
