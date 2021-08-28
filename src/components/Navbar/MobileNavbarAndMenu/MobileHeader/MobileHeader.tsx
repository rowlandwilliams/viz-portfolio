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
    <div className="flex justify-between items-center h-24 bg-red-400 p-4 font-tt-interfaces-demi text-2xl">
      <div>
        <div>Rowland</div>
        <div>Williams</div>
      </div>
      <NavIconSwitch
        menuIsVisible={mobileMenuIsVisible}
        handleIconClick={handleIconClick}
        backgroundColors={backgroundColors}
      />
    </div>
  );
};
