import { useState } from "react";
import { Link } from "react-router-dom";

interface LinkOption {
  linkOption: string;
  imgFolderName: string;
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
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div
        className="flex justify-between items-center"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="cursor-pointer">{linkTitle}</div>
        <div>{isActive ? <span>&#x25B3;</span> : <span>&#x25BD;</span>}</div>
      </div>
      <div className={isActive ? "block " : "hidden"}>
        {linkOptions.map((option) => (
          <div
            className="text-xs ml-2 hover:text-black"
            key={option.linkOption}
          >
            <Link
              to={"/" + option.imgFolderName}
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
