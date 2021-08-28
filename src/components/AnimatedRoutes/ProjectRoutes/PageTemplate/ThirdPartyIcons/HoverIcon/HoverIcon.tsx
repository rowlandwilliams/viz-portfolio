import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  backgroundColor: string;
  iconUrl: string | undefined;
  svgIcon: React.ReactNode;
}

export const HoverIcon = ({ backgroundColor, iconUrl, svgIcon }: Props) => {
  const [iconIsHovered, setIconIsHovered] = useState(false);

  return (
    <a href={iconUrl} target="_blank" rel="noreferrer nopener">
      <div
        onMouseOver={() => setIconIsHovered(true)}
        onMouseLeave={() => setIconIsHovered(false)}
      >
        <div className="relative">
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
        </div>
      </div>
    </a>
  );
};
