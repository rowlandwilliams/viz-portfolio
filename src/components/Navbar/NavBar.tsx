import { useState } from "react";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { SocialIcons } from "./SocialIcons/SocialIcons";
import { DesktopBurger } from "./DesktopBurger/DesktopBurger";
import { DesktopHeader } from "./DesktopHeader/DesktopHeader";

export const NavBar = () => {
  const [burgerIsVisible, setBurgerIsVisible] = useState(true);
  const [desktopBurgerIsVisible, setDesktopBurgerIsVisible] = useState(true);
  const handleBurgerClick = () => {
    setBurgerIsVisible(!burgerIsVisible);
  };

  const handleDesktopBurgerClick = () => {
    setDesktopBurgerIsVisible(!desktopBurgerIsVisible);
  };

  return (
    <div className="fixed flex flex-col justify-between items-center w-screen md:w-auto h-20 md:h-screen p-4 bg-white z-30">
      <div>
        <div className="relative ">
          <DesktopBurger
            handleBurgerClick={handleDesktopBurgerClick}
            burgerIsVisible={desktopBurgerIsVisible}
          />
          <DesktopHeader burgerIsVisible={desktopBurgerIsVisible} />
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
