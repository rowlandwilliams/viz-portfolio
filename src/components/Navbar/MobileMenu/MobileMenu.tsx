import classNames from "classnames";
import { Link } from "react-router-dom";
import { CrossIcon } from "./CrossIcon/CrossIcon";

interface Props {
  burgerIsVisible: boolean;
  handleBurgerClick: () => void;
}

export const MobileMenu = ({ burgerIsVisible, handleBurgerClick }: Props) => {
  return (
    <div
      className={classNames(
        "md:hidden absolute transition-left duration-300 top-0",
        {
          "-left-full": burgerIsVisible,
          "left-0": !burgerIsVisible,
        },
        "w-full h-screen p-4 bg-gray-100 z-20 bg-opacity-95"
      )}
    >
      <div className="flex justify-between ">
        <Link to="/">Projects</Link>
        <CrossIcon handleBurgerClick={handleBurgerClick} />
      </div>
      <div>CV</div>
    </div>
  );
};
