import { DesktopBurger } from "../DesktopBurger/DesktopBurger";
import { DesktopHeader } from "../DesktopHeader/DesktopHeader";
import { SocialIcons } from "../SocialIcons/SocialIcons";

interface Props {
  desktopMenuIsVisible: boolean;
  handleDesktopBurgerClick: (menuIsVisible: boolean) => void;
  backgroundColors: string[];
}

export const DesktopNavbar = ({
  desktopMenuIsVisible,
  handleDesktopBurgerClick,
  backgroundColors,
}: Props) => {
  return (
    <div className="hidden md:flex flex-col md:h-full justify-between items-center">
      <div className="relative">
        <DesktopBurger
          handleBurgerClick={handleDesktopBurgerClick}
          menuIsVisible={desktopMenuIsVisible}
          backgroundColors={backgroundColors}
        />
        <DesktopHeader menuIsVisible={desktopMenuIsVisible} />
      </div>
      <SocialIcons />
    </div>
  );
};
