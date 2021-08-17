import { useState } from "react";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import classNames from "classnames";

export const NavBar = () => {
  const [burgerIsClicked, setBurgerIsClicked] = useState(false);

  const handleBurgerClick = () => {
    setBurgerIsClicked(!burgerIsClicked);
  };

  console.log(burgerIsClicked);

  const getClass = () =>
    classNames(
      "w-full absolute transition-left duration-500 top-0",
      {
        "left-full": burgerIsClicked,
        "left-0": !burgerIsClicked,
      },
      "p-4 bg-blue-300"
    );

  return (
    <div className="bg-red-400 relative md:w-80 p-4">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-3xl">Rowland Williams</div>
        </div>
        <BurgerMenu
          burgerIsClicked={burgerIsClicked}
          handleBurgerClick={handleBurgerClick}
        />
      </div>
      <div className="text-gray-800">Data Visualisation Engineer</div>
      <div className={getClass()}>
        <div className="flex justify-between">
          <div>Menu Item</div>
          <div onClick={handleBurgerClick}>X</div>
        </div>
        <div>Menu Item</div>
      </div>
    </div>
  );
};
