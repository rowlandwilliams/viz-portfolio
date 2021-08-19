import { Link } from "react-router-dom";

export const DesktopMenu = () => {
  return (
    <div className="hidden md:block w-96 mt-8 text-sm">
      <Link to="/" className="hover:opacity-30">
        Projects
      </Link>
      <a
        href="https://rowlandwilliams.github.io/cv/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className="hover:opacity-30"> CV</div>
      </a>
    </div>
  );
};
