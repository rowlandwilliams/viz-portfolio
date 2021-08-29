import { GithubLinkIcon } from "../../../AnimatedRoutes/ProjectRoutes/PageTemplate/PageHeader/PageIcons/GithubLink/GithubLinkIcon/GithubLinkIcon";
import { HoverIcon } from "../../../AnimatedRoutes/ProjectRoutes/PageTemplate/PageHeader/PageIcons/HoverIcon/HoverIcon";
import { LinkedIn } from "./LinkedIn/Linkedin";

interface Props {
  hoverColor: string;
  isMobile?: boolean;
}

export const NavbarSocialIcons = ({ hoverColor, isMobile = false }: Props) => {
  return (
    <div className="flex items-center justify-center pb-2 md:pb-0">
      <HoverIcon
        backgroundColor={hoverColor}
        showTooltip={false}
        svgIcon={<LinkedIn />}
        iconUrl={"https://www.linkedin.com/in/rowland-williams-51649318b/"}
        isMobile={isMobile}
      />
      <HoverIcon
        backgroundColor={hoverColor}
        showTooltip={false}
        svgIcon={<GithubLinkIcon />}
        iconUrl={"https://github.com/rowlandwilliams"}
        isMobile={isMobile}
      />
    </div>
  );
};
