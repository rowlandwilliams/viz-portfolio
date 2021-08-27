import classNames from "classnames";
import { projectData } from "../../utils/projectData";
import { BurgerIcon } from "../Header/BurgerIcon/BurgerIcon";
import { CrossIcon } from "../MobileMenu/CrossIcon/CrossIcon";

interface Props {
  burgerIsVisible: boolean;
  handleBurgerClick: () => void;
}

// select 2 random bg colors
const backgroundColors = projectData
  .map((project) => project.backgroundColor)
  .sort(() => 0.5 - Math.random())
  .slice(0, 2);

export const DesktopBurger = ({
  burgerIsVisible,
  handleBurgerClick,
}: Props) => {
  return (
    <div
      className={classNames(
        "hidden md:flex justify-center items-center w-16 h-16 p-4 rounded-full",
        {
          ["bg-" + backgroundColors[0]]: burgerIsVisible,
          ["bg-" + backgroundColors[1]]: !burgerIsVisible,
        }
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
