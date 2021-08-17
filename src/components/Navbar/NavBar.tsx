import { useState } from "react";
import { DesktopMenu } from "./DesktopMenu/DesktopMenu";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { Header } from "./Header/Header";

export const NavBar = () => {
  const [burgerIsClicked, setBurgerIsClicked] = useState(false);

  const handleBurgerClick = () => {
    setBurgerIsClicked(!burgerIsClicked);
  };

  return (
    <div className="relative md:w-80 p-4">
      <Header handleBurgerClick={handleBurgerClick} />
      <MobileMenu
        burgerIsClicked={burgerIsClicked}
        handleBurgerClick={handleBurgerClick}
      />
      <DesktopMenu />
    </div>
  );
};
