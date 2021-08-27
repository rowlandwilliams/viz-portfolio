import classNames from "classnames";
import { projectData } from "../../utils/projectData";
import { BurgerIcon } from "../Header/BurgerIcon/BurgerIcon";
import { CrossIcon } from "../MobileMenu/CrossIcon/CrossIcon";

interface Props {
  burgerIsVisible: boolean;
  handleBurgerClick: () => void;
  backgroundColors: string[];
}

export const DesktopBurger = ({
  burgerIsVisible,
  handleBurgerClick,
  backgroundColors,
}: Props) => {
  return (
    <div
      className={classNames(
        "hidden md:flex justify-center items-center w-16 h-16 p-4 rounded-full cursor-pointer",
        {
          ["bg-" + backgroundColors[0]]: burgerIsVisible,
          ["bg-" + backgroundColors[1]]: !burgerIsVisible,
        },
        "hover:bg-opacity-60"
      )}
      onClick={handleBurgerClick}
    >
      {burgerIsVisible ? (
        <BurgerIcon handleBurgerClick={handleBurgerClick} />
      ) : (
        <CrossIcon dimension={25} />
      )}
    </div>
  );
};
