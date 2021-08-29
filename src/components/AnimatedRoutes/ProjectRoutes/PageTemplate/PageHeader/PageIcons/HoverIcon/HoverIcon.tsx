import classNames from "classnames";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  backgroundColor: string;
  iconUrl: string | undefined;
  svgIcon: React.ReactNode;
  tooltipComponent: React.ReactNode;
  showTooltip?: boolean;
}

export const HoverIcon = ({
  backgroundColor,
  iconUrl,
  svgIcon,
  tooltipComponent,
  showTooltip = true,
}: Props) => {
  const [iconIsHovered, setIconIsHovered] = useState(false);

  return (
    <a href={iconUrl} target="_blank" rel="noreferrer nopener">
      <div
        onMouseOver={() => setIconIsHovered(true)}
        onMouseLeave={() => setIconIsHovered(false)}
        className="mr-2"
      >
        <div className="relative flex flex-col items-center">
          <svg height="36" width="36">
            <motion.circle
              className={"fill-current text-opacity-50 text-" + backgroundColor}
              cx="50%"
              cy="50%"
              r="0"
              fill={backgroundColor}
              animate={{
                r: iconIsHovered ? "50%" : 0,
              }}
              transition={{ duration: 0.15 }}
            ></motion.circle>
          </svg>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-1/4">
            {svgIcon}
          </div>
          {showTooltip && (
            <div
              className={classNames(
                `absolute top-full whitespace-nowrap text-${backgroundColor} text-xs underline p-2 transition-opacity duration-300`,
                {
                  "opacity-1": iconIsHovered,
                  "opacity-0": !iconIsHovered,
                }
              )}
            >
              {tooltipComponent}
            </div>
          )}
        </div>
      </div>
    </a>
  );
};
