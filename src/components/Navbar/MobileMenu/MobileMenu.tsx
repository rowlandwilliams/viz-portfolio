import { Link } from "react-router-dom";
import { CrossIcon } from "./CrossIcon/CrossIcon";
import { getClassFromBurgerClick } from "./utils";

interface Props {
  burgerIsClicked: boolean;
  handleBurgerClick: () => void;
}

export const MobileMenu = ({ burgerIsClicked, handleBurgerClick }: Props) => {
  return (
    <div className={getClassFromBurgerClick(burgerIsClicked)}>
      <div className="flex justify-between ">
        <Link to="/">Projects</Link>
        <CrossIcon handleBurgerClick={handleBurgerClick} />
      </div>
      <div>CV</div>
    </div>
  );
};
