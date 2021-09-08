import classNames from "classnames";
import { Link } from "react-router-dom";

interface Props {
  isLeft?: boolean;
}

export const Chevron = ({ isLeft = false }: Props) => {
  return (
    <Link to="/flow">
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        className={classNames(
          "absolute top-1/2",
          { "right-0": !isLeft },
          "hidden md:flex h-10",
          {
            "transform rotate-180": isLeft,
          }
        )}
      >
        <polygon
          points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 
	345.606,368.713 476.213,238.106 "
        />
      </svg>
    </Link>
  );
};
