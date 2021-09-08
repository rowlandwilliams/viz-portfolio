import { motion } from "framer-motion";

interface Props {
  backgroundColor: string;
  iconIsHovered: boolean;
}

export const ExpandingCircle = ({ backgroundColor, iconIsHovered }: Props) => {
  return (
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
  );
};
