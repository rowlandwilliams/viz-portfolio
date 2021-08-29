import classNames from "classnames";
import { Link } from "react-router-dom";
import { NavbarSocialIcons } from "../../NavbarSocialIcons/SocialIcons/NavbarSocialIcons";

interface Props {
  menuIsVisible: boolean;
  closeMenuOnLinkClick: (menuIsVisible: boolean) => void;
  backgroundColor: string;
}

export const MobileMenu = ({
  menuIsVisible,
  closeMenuOnLinkClick,
  backgroundColor,
}: Props) => {
  const { innerHeight } = window;
  return (
    <div
      className={classNames(
        "md:hidden absolute transition-left duration-300 top-0",
        {
          "-left-full": !menuIsVisible,
          "left-0": menuIsVisible,
        },
        "w-auto min-h-screen px-4 pt-2 z-20 bg-" + backgroundColor
      )}
      style={{ height: innerHeight + "px" }}
    >
      <div className="flex flex-col h-full">
        <div>
          <div className="font-tt-interfaces-demi text-white text-2xl mb-4">
            <div>Data Visualisation</div>
            <div>Engineer</div>
          </div>
          <div className="text-sm pt-2 mb-4">
            <div className="flex justify-between">
              <div>
                <Link to="/" onClick={() => closeMenuOnLinkClick(false)}>
                  Projects
                </Link>
                <Link
                  to="/about"
                  className="hover:opacity-30"
                  onClick={() => closeMenuOnLinkClick(false)}
                >
                  <div className="hover:opacity-30">Bio</div>
                </Link>
              </div>
            </div>

            <a
              href="https://rowlandwilliams.github.io/cv/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="hover:opacity-30">CV</div>
            </a>
          </div>
        </div>
        <div className="flex md:hidden pt-2">
          <NavbarSocialIcons hoverColor={backgroundColor} isMobile />
        </div>
      </div>
    </div>
  );
};
