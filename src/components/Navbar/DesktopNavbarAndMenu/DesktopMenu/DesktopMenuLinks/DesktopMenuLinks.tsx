import { Link } from "react-router-dom";
import { OptionMenuLink } from "../../../OptionMenuLink/OptionMenuLink";

interface Props {
  closeMenuOnLinkClick: (menuIsVisible: boolean) => void;
}

const designOptions = [
  { linkOption: "Boards" },
  { linkOption: "Digital" },
  { linkOption: "Illustration" },
];
export const DesktopMenuLinks = ({ closeMenuOnLinkClick }: Props) => {
  return (
    <div className="hidden md:block mt-4 text-sm ">
      <div>
        <Link to="/" onClick={() => closeMenuOnLinkClick(false)}>
          <div className="hover:text-black">Code</div>
        </Link>
        <OptionMenuLink
          linkTitle="Design"
          linkOptions={designOptions}
          closeMenuOnLinkClick={closeMenuOnLinkClick}
        />
      </div>
    </div>
  );
};
