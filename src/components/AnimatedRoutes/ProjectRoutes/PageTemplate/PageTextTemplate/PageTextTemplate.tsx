import classNames from "classnames";
import { useRef } from "react";
import { useIntersectionObserver } from "./utils";

interface Props {
  headerText: string;
  sectionParagraphs: string[] | undefined;
}

export const PageTextTemplate = ({ headerText, sectionParagraphs }: Props) => {
  const textRef = useRef(null);

  // check for 1/4 visibility
  const isQuarterVisible = useIntersectionObserver(textRef, {
    threshold: 0.25,
  })?.isIntersecting;

  return (
    <>
      {sectionParagraphs ? (
        <div
          className={classNames("text-lg py-16 transition-all duration-1000", {
            "opacity-0 ": !isQuarterVisible,
            "opacity-1 transform -translate-y-3.5 ": isQuarterVisible,
          })}
          ref={textRef}
        >
          <div>
            <div className="text-xl font-tt-interfaces-demi mb-6">
              {headerText}
            </div>
            {sectionParagraphs.map((sectionParagraph) => (
              <div className="py-2">{sectionParagraph}</div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};
