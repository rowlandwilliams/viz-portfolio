import classNames from "classnames";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  backgroundColor: string;
  iconUrl: string | undefined;
  svgIcon: React.ReactNode;
  tooltipText: string | undefined;
}

export const HoverIcon = ({
  backgroundColor,
  iconUrl,
  svgIcon,
  tooltipText,
}: Props) => {
  const [iconIsHovered, setIconIsHovered] = useState(false);

  return (
    <a href={iconUrl} target="_blank" rel="noreferrer nopener">
      <div
        onMouseOver={() => setIconIsHovered(true)}
        onMouseLeave={() => setIconIsHovered(false)}
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
          <div
            className={classNames(
              `border border-${backgroundColor} bg-opacity-50 rounded-sm text-${backgroundColor} text-xs p-2 mt-2 transition-opacity duration-300`,
              {
                "opacity-1": iconIsHovered,
                "opacity-0": !iconIsHovered,
              }
            )}
          >
            <div>Explore</div>
            {tooltipText}
          </div>
        </div>
      </div>
    </a>
  );
};
