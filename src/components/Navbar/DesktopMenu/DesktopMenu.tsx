import { Link } from "react-router-dom";

export const DesktopMenu = () => {
  return (
    <div className="hidden md:block w-96 mt-8 text-sm">
      <Link to="/">Projects</Link>
      <a
        href="https://rowlandwilliams.github.io/cv/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <div> CV</div>
      </a>
    </div>
  );
};
