import { Link } from "react-router-dom";

export const DesktopMenu = () => {
  return (
    <div className="hidden md:block mt-4 text-sm ">
      <Link to="/">
        <div className="hover:text-black">Projects</div>
      </Link>
      <Link to="/about" className="hover:text-black">
        <div className="hover:text-black">Bio</div>
      </Link>
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
