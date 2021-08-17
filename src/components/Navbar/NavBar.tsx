import { useState } from "react";
import { DesktopMenu } from "./DesktopMenu/DesktopMenu";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { Header } from "./Header/Header";

export const NavBar = () => {
  const [burgerIsVisible, setBurgerIsVisible] = useState(false);

  const handleBurgerClick = () => {
    setBurgerIsVisible(!burgerIsVisible);
  };

  return (
    <div className="w-screen md:w-80 md:h-screen p-4">
      <Header handleBurgerClick={handleBurgerClick} />
      <MobileMenu
        burgerIsVisible={burgerIsVisible}
        handleBurgerClick={handleBurgerClick}
      />
      <DesktopMenu />
    </div>
  );
};
