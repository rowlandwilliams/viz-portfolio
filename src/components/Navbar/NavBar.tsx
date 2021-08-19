import { useState } from "react";
import { DesktopMenu } from "./DesktopMenu/DesktopMenu";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { Header } from "./Header/Header";

export const NavBar = () => {
  const [burgerIsVisible, setBurgerIsVisible] = useState(true);

  const handleBurgerClick = () => {
    setBurgerIsVisible(!burgerIsVisible);
  };

  return (
    <div className="fixed w-screen md:w-80 h-20 md:h-screen p-4 bg-white z-30">
      <Header handleBurgerClick={handleBurgerClick} />
      <MobileMenu
        burgerIsVisible={burgerIsVisible}
        handleBurgerClick={handleBurgerClick}
      />
      <DesktopMenu />
    </div>
  );
};
