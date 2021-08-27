import classNames from "classnames";
import { BurgerIcon } from "../Header/BurgerIcon/BurgerIcon";
import { CrossIcon } from "../MobileMenu/CrossIcon/CrossIcon";

interface Props {
  menuIsVisible: boolean;
  handleBurgerClick: () => void;
  backgroundColors: string[];
}

export const DesktopBurger = ({
  menuIsVisible,
  handleBurgerClick,
  backgroundColors,
}: Props) => {
  return (
    <div
      className={classNames(
        "hidden md:flex justify-center items-center w-16 h-16 p-4 rounded-full cursor-pointer",
        {
          ["bg-" + backgroundColors[0]]: !menuIsVisible,
          ["bg-" + backgroundColors[1]]: menuIsVisible,
        }
      )}
      onClick={handleBurgerClick}
    >
      {menuIsVisible ? (
        <CrossIcon dimension={25} />
      ) : (
        <BurgerIcon handleBurgerClick={handleBurgerClick} />
      )}
    </div>
  );
};
