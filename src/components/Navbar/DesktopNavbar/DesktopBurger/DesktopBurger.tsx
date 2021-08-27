import classNames from "classnames";
import { BurgerIcon } from "../../Header/BurgerIcon/BurgerIcon";
import { CrossIcon } from "../../MobileMenu/CrossIcon/CrossIcon";

interface Props {
  menuIsVisible: boolean;
  handleBurgerClick: (menuIsVisible: boolean) => void;
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
        "flex justify-center items-center w-16 h-16 p-4 rounded-full cursor-pointer",
        {
          ["bg-" + backgroundColors[0]]: !menuIsVisible,
          ["bg-" + backgroundColors[1]]: menuIsVisible,
        }
      )}
      onClick={() => handleBurgerClick(!menuIsVisible)}
    >
      {menuIsVisible ? <CrossIcon dimension={25} /> : <BurgerIcon />}
    </div>
  );
};
