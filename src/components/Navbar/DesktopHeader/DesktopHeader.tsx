import { Link } from "react-router-dom";

interface Props {
  burgerIsVisible: boolean;
}

export const DesktopHeader = ({ burgerIsVisible }: Props) => {
  return (
    <div className="absolute left-1/4 hidden md:flex origin-bottom-right-right origin-top-right transform -rotate-90 -translate-x-full  whitespace-nowrap">
      <Link to="/">
        <div className="flex justify-between items-center">
          <div>
            {burgerIsVisible ? (
              <div className="font-tt-interfaces-demi text-xl mr-4">
                Rowland Williams
              </div>
            ) : (
              <div className="text-xl text-gray-800 mr-4 bg-pink-400">
                Data Visualisation Engineer
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};
