import { Link } from "react-router-dom";
import { designData } from "../../../../utils/designData";
import { OptionMenuLink } from "../../../OptionMenuLink/OptionMenuLink";

interface Props {
  closeMenuOnLinkClick: (menuIsVisible: boolean) => void;
}

export const DesktopMenuLinks = ({ closeMenuOnLinkClick }: Props) => {
  return (
    <div className="hidden md:block mt-4 text-sm ">
      <div>
        <Link to="/" onClick={() => closeMenuOnLinkClick(false)}>
          <div className="hover:text-black">Code</div>
        </Link>
        <OptionMenuLink
          linkTitle="Design"
          linkOptions={designData}
          closeMenuOnLinkClick={closeMenuOnLinkClick}
        />
      </div>
    </div>
  );
};
