import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Link to="/">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-xl">Rowland Williams</div>
          </div>
        </div>
        <div className="text-sm text-gray-800">Data Visualisation Engineer</div>
      </Link>
    </>
  );
};
