import classNames from "classnames";
import { Link } from "react-router-dom";
import { SocialIcons } from "../SocialIcons/SocialIcons";
import { CrossIcon } from "./CrossIcon/CrossIcon";

interface Props {
  burgerIsVisible: boolean;
  handleBurgerClick: () => void;
}

export const MobileMenu = ({ burgerIsVisible, handleBurgerClick }: Props) => {
  return (
    <div
      className={classNames(
        "md:hidden absolute transition-left duration-300 top-0",
        {
          "-left-full": burgerIsVisible,
          "left-0": !burgerIsVisible,
        },
        "w-full h-screen p-4 bg-gray-100 z-20 bg-opacity-95"
      )}
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex justify-between">
            <div>
              <Link to="/" onClick={handleBurgerClick}>
                Projects
              </Link>
              <Link
                to="/about"
                className="hover:opacity-30"
                onClick={handleBurgerClick}
              >
                <div className="hover:opacity-30">Bio</div>
              </Link>
            </div>

            <CrossIcon handleBurgerClick={handleBurgerClick} />
          </div>

          <a
            href="https://rowlandwilliams.github.io/cv/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="hover:opacity-30"> CV</div>
          </a>
        </div>
        <div className="flex justify-center md:hidden">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};
