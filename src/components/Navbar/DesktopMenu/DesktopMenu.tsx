import { Link } from "react-router-dom";

export const DesktopMenu = () => {
  return (
    <div className="hidden md:block w-96 mt-8 text-sm">
      <Link to={process.env.PUBLIC_URL + "/"}>Projects</Link>
      <div>CV</div>
    </div>
  );
};
