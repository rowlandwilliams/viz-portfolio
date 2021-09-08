import { useState } from "react";
import { ExpandingCircle } from "./ExpandingCircle/ExpandingCircle";
import { SvgIcon } from "./SvgIcon/SvgIcon";
import { Tooltip } from "./Tooltip/Tooltip";

interface Props {
  backgroundColor: string;
  iconUrl: string | undefined;
  svgIcon: React.ReactNode;
  tooltipComponent?: React.ReactNode;
  showTooltip?: boolean;
  isMobile?: boolean;
}

export const HoverIcon = ({
  backgroundColor,
  iconUrl,
  svgIcon,
  tooltipComponent,
  showTooltip = true,
  isMobile = false,
}: Props) => {
  const [iconIsHovered, setIconIsHovered] = useState(false);

  return (
    <a href={iconUrl} target="_blank" rel="noreferrer nopener">
      <div
        onMouseOver={() => setIconIsHovered(true)}
        onMouseLeave={() => setIconIsHovered(false)}
        className={showTooltip ? "ml-2" : ""}
      >
        {isMobile ? (
          <div className="mr-1">
            <SvgIcon showTooltip={showTooltip} svgIcon={svgIcon} isMobile />
          </div>
        ) : (
          <div className="relative flex flex-col items-center">
            <ExpandingCircle
              backgroundColor={backgroundColor}
              iconIsHovered={iconIsHovered}
            />
            <SvgIcon showTooltip={showTooltip} svgIcon={svgIcon} />
            <Tooltip
              showTooltip={showTooltip}
              backgroundColor={backgroundColor}
              iconIsHovered={iconIsHovered}
              tooltipComponent={tooltipComponent}
            />
          </div>
        )}
      </div>
    </a>
  );
};
