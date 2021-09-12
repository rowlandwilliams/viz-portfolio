import classNames from "classnames";
import { useRef } from "react";
import { useIntersectionObserver } from "../PageTextTemplate/utils";

interface Props {
  children: React.ReactNode;
  threshold?: number;
}

export const FadeInOnScrollComponent = ({
  children,
  threshold = 0.25,
}: Props) => {
  const fadeInRef = useRef(null);

  // check for 1/4 visibility
  const isQuarterVisible = useIntersectionObserver(fadeInRef, {
    threshold: threshold,
  })?.isIntersecting;

  return (
    <div
      className={classNames("transition-all duration-1000", {
        "opacity-0 ": !isQuarterVisible,
        "opacity-1 transform -translate-y-3.5 ": isQuarterVisible,
      })}
      ref={fadeInRef}
    >
      {children}
    </div>
  );
};
