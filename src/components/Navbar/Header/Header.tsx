import { Link } from "react-router-dom";
import { BurgerIcon } from "./BurgerIcon/BurgerIcon";

interface Props {
  handleBurgerClick: () => void;
}

export const Header = ({ handleBurgerClick }: Props) => {
  return (
    <>
      <Link to="/">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-xl">Rowland Williams</div>
          </div>
          <BurgerIcon handleBurgerClick={handleBurgerClick} />
        </div>
        <div className="text-sm text-gray-800">Data Visualisation Engineer</div>
      </Link>
    </>
  );
};
