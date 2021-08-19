import { useState } from "react";
import { DesktopMenu } from "./DesktopMenu/DesktopMenu";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { Header } from "./Header/Header";
import { SocialIcons } from "./SocialIcons/SocialIcons";

export const NavBar = () => {
  const [burgerIsVisible, setBurgerIsVisible] = useState(true);

  const handleBurgerClick = () => {
    setBurgerIsVisible(!burgerIsVisible);
  };

  return (
    <div className="fixed flex flex-col justify-between w-screen md:w-60 h-20 md:h-screen p-4 bg-white z-30">
      <div>
        <Header handleBurgerClick={handleBurgerClick} />
        <MobileMenu
          burgerIsVisible={burgerIsVisible}
          handleBurgerClick={handleBurgerClick}
        />
        <DesktopMenu />
      </div>
      <div className="hidden md:flex">
        <SocialIcons />
      </div>
    </div>
  );
};
