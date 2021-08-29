import classNames from "classnames";

interface Props {
  showTooltip: boolean;
  backgroundColor: string;
  iconIsHovered: boolean;
  tooltipComponent: React.ReactNode;
}

export const Tooltip = ({
  showTooltip,
  backgroundColor,
  iconIsHovered,
  tooltipComponent,
}: Props) => {
  return (
    <>
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
    </>
  );
};
