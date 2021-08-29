import classNames from "classnames";
import { BurgerIcon } from "./BurgerIcon/BurgerIcon";
import { CrossIcon } from "./CrossIcon/CrossIcon";

interface Props {
  menuIsVisible: boolean;
  handleIconClick: (menuIsVisible: boolean) => void;
  backgroundColors: string[];
}

export const NavIconSwitch = ({
  menuIsVisible,
  handleIconClick,
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
      onClick={() => handleIconClick(!menuIsVisible)}
    >
      {menuIsVisible ? <CrossIcon dimension={25} /> : <BurgerIcon />}
    </div>
  );
};
