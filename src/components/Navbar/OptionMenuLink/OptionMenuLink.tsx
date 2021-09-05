import { Link } from "react-router-dom";

interface LinkOption {
  linkOption: string;
}

interface Props {
  linkTitle: string;
  linkOptions: LinkOption[];
  closeMenuOnLinkClick: (menuIsVisible: boolean) => void;
}

export const OptionMenuLink = ({
  linkTitle,
  linkOptions,
  closeMenuOnLinkClick,
}: Props) => {
  return (
    <div>
      <div>{linkTitle}</div>
      <div>
        {linkOptions.map((option) => (
          <div className="text-xs ml-2">
            <Link
              to={"/" + option.linkOption.toLowerCase()}
              onClick={() => closeMenuOnLinkClick(false)}
            >
              {option.linkOption}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
