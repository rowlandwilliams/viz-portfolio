import { useState } from "react";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { SocialIcons } from "./SocialIcons/SocialIcons";
import { DesktopBurger } from "./DesktopBurger/DesktopBurger";
import { DesktopHeader } from "./DesktopHeader/DesktopHeader";

interface Props {
  desktopMenuIsVisible: boolean;
  handleDesktopMenuClick: () => void;
  backgroundColors: string[];
}

export const NavBar = ({
  desktopMenuIsVisible,
  handleDesktopMenuClick,
  backgroundColors,
}: Props) => {
  const [burgerIsVisible, setBurgerIsVisible] = useState(true);
  const handleBurgerClick = () => {
    setBurgerIsVisible(!burgerIsVisible);
  };

  return (
    <div className="fixed flex flex-col justify-between items-center w-screen md:w-24 h-20 md:h-screen p-4 bg-white z-30">
      <div>
        <div className="relative ">
          <div>
            <DesktopBurger
              handleBurgerClick={handleDesktopMenuClick}
              menuIsVisible={desktopMenuIsVisible}
              backgroundColors={backgroundColors}
            />
            <DesktopHeader menuIsVisible={desktopMenuIsVisible} />
          </div>
        </div>

        {/* <Header handleBurgerClick={handleBurgerClick} /> */}
        <MobileMenu
          burgerIsVisible={burgerIsVisible}
          handleBurgerClick={handleBurgerClick}
        />
        {/* <DesktopMenu /> */}
      </div>
      <div className="hidden md:flex">
        <SocialIcons />
      </div>
    </div>
  );
};
