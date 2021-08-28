import { MobileMenu } from "./MobileMenu/MobileMenu";
import { MobileHeader } from "./MobileHeader/MobileHeader";

interface Props {
  mobileMenuIsVisible: boolean;
  handleIconClick: (menuIsVisible: boolean) => void;
  backgroundColors: string[];
}

export const MobileNavbarAndMenu = ({
  mobileMenuIsVisible,
  handleIconClick,
  backgroundColors,
}: Props) => {
  return (
    <div className="md:hidden w-full">
      <MobileHeader
        mobileMenuIsVisible={mobileMenuIsVisible}
        handleIconClick={handleIconClick}
        backgroundColors={backgroundColors}
      />
      <MobileMenu
        menuIsVisible={mobileMenuIsVisible}
        closeMenuOnLinkClick={handleIconClick}
        backgroundColor={backgroundColors[0]}
      />
    </div>
  );
};
