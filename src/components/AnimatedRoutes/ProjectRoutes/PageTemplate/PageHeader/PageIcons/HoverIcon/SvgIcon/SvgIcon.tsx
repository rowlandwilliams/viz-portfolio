import classNames from "classnames";

interface Props {
  showTooltip: boolean;
  svgIcon: React.ReactNode;
  isMobile?: boolean;
}

export const SvgIcon = ({ showTooltip, svgIcon, isMobile = false }: Props) => {
  return (
    <>
      {isMobile ? (
        <div className="opacity-60">{svgIcon}</div>
      ) : (
        <div
          className={classNames(
            "absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-1/4",
            {
              "opacity-50": !showTooltip, // add opacity to navbar social icons
            }
          )}
        >
          {svgIcon}
        </div>
      )}
    </>
  );
};
