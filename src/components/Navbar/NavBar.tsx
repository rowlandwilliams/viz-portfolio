import { useState } from "react";

import { DesktopNavbar } from "./DesktopNavbar/DesktopNavbar";

interface Props {
  desktopMenuIsVisible: boolean;
  handleDesktopBurgerClick: (menuIsVisible: boolean) => void;
  backgroundColors: string[];
}

export const NavBar = ({
  desktopMenuIsVisible,
  handleDesktopBurgerClick,
  backgroundColors,
}: Props) => {
  const [burgerIsVisible, setBurgerIsVisible] = useState(true);
  const handleBurgerClick = () => {
    setBurgerIsVisible(!burgerIsVisible);
  };

  return (
    <div className="fixed flex justify-between items-center w-screen md:w-24 h-20 md:h-screen p-4 bg-white z-30">
      <DesktopNavbar
        desktopMenuIsVisible={desktopMenuIsVisible}
        handleDesktopBurgerClick={handleDesktopBurgerClick}
        backgroundColors={backgroundColors}
      />
    </div>
  );
};
