import { BurgerIcon } from "../Header/BurgerIcon/BurgerIcon";
import { CrossIcon } from "../MobileMenu/CrossIcon/CrossIcon";

interface Props {
  burgerIsVisible: boolean;
  handleBurgerClick: () => void;
}

export const DesktopBurger = ({
  burgerIsVisible,
  handleBurgerClick,
}: Props) => {
  return (
    <div
      className="hidden md:flex bg-rose-300 p-4 rounded-full"
      onClick={handleBurgerClick}
    >
      {burgerIsVisible ? (
        <BurgerIcon handleBurgerClick={handleBurgerClick} />
      ) : (
        <CrossIcon />
      )}
    </div>
  );
};
