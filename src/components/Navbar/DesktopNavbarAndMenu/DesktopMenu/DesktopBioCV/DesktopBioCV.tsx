import { Link } from "react-router-dom";

interface Props {
  closeMenuOnLinkClick: (menuIsVisible: boolean) => void;
}

export const DesktopBioCV = ({ closeMenuOnLinkClick }: Props) => {
  return (
    <div className="flex justify-between">
      <Link
        to="/about"
        className="hover:text-black"
        onClick={() => closeMenuOnLinkClick(false)}
      >
        <div className="hover:text-black">Bio</div>
      </Link>
      {" | "}
      <a
        href="https://rowlandwilliams.github.io/cv/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className="hover:text-black">CV</div>
      </a>
    </div>
  );
};
