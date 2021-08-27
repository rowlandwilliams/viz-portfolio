import { Link } from "react-router-dom";
import { MobileBurger } from "../MobileBurger/MobileBurger";

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
          <MobileBurger handleBurgerClick={handleBurgerClick} />
        </div>
        <div className="text-sm text-gray-800">Data Visualisation Engineer</div>
      </Link>
    </>
  );
};
