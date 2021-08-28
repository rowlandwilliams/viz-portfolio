import { Link } from "react-router-dom";
import { NavIconSwitch } from "../../Icons/NavIconSwitch/NavIconSwitch";

interface Props {
  mobileMenuIsVisible: boolean;
  handleIconClick: (menuIsVisible: boolean) => void;
  backgroundColors: string[];
}

export const MobileHeader = ({
  mobileMenuIsVisible,
  handleIconClick,
  backgroundColors,
}: Props) => {
  return (
    <div className="flex justify-between items-center h-24 p-4 font-tt-interfaces-demi text-2xl">
      <Link to="/">
        <div>Rowland</div>
        <div>Williams</div>
      </Link>
      <NavIconSwitch
        menuIsVisible={mobileMenuIsVisible}
        handleIconClick={handleIconClick}
        backgroundColors={backgroundColors}
      />
    </div>
  );
};
