import { BurgerIcon } from "../Header/BurgerIcon/BurgerIcon";

interface Props {
  handleBurgerClick: () => void;
}
export const MobileBurger = ({ handleBurgerClick }: Props) => {
  return (
    <div className="md:hidden opacity-80" onClick={handleBurgerClick}>
      <BurgerIcon />
    </div>
  );
};
