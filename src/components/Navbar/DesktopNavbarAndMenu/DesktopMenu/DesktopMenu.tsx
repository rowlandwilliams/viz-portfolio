import classNames from "classnames";
import { DesktopBioCV } from "./DesktopBioCV/DesktopBioCV";
import { DesktopMenuLinks } from "./DesktopMenuLinks/DesktopMenuLinks";

interface Props {
  desktopMenuIsVisible: boolean;
  handleIconClick: (menuIsVisible: boolean) => void;
  backgroundColors: string[];
}

export const DesktopMenu = ({
  desktopMenuIsVisible,
  handleIconClick,
  backgroundColors,
}: Props) => {
  return (
    <div
      className={classNames(
        "flex flex-col justify-between md:h-screen pt-8 pb-4 transition-all ease-in-out duration-150 overflow-hidden",
        {
          "w-28 overflow-visible px-4 opacity-100": desktopMenuIsVisible,
          "w-0 px-0 opacity-0": !desktopMenuIsVisible,
        },
        "leading-5 text-sm text-white box-border bg-" + backgroundColors[0]
      )}
    >
      <div>
        <div className="font-tt-interfaces-demi text-black">
          <div>Data</div>
          <div>Visualisation</div>
          <div>Engineer</div>
        </div>
        <DesktopMenuLinks closeMenuOnLinkClick={handleIconClick} />
      </div>
      <DesktopBioCV closeMenuOnLinkClick={handleIconClick} />
    </div>
  );
};
