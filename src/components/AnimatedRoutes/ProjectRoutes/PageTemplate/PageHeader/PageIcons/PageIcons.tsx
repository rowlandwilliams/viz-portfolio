import { HoverIcon } from "./HoverIcon/HoverIcon";
import { ClientLinkIcon } from "./ClientLink/ClientLinkIcon/ClientLinkIcon";
import { ClientLinkTooltip } from "./ClientLink/ClientLinkTooltip/ClientLinkTooltip";
import { GithubLinkIcon } from "./GithubLink/GithubLinkIcon/GithubLinkIcon";
import { GithubLinkTooltip } from "./GithubLink/GithubLinkTooltip/GithubLinkTooltip";
import { ProjectLinkIcon } from "./ProjectLink/ProjectLinkIcon/ProjectLinkIcon";
import { ProjectLinkTooltip } from "./ProjectLink/ProjectLinkTooltip/ProjectLinkTooltip";

interface Props {
  backgroundColor: string;
  clientUrl: string | undefined;
  clientName: string | undefined;
  repoUrl: string | undefined;
  projectUrl: string | undefined;
}

export const PageIcons = ({
  backgroundColor,
  clientUrl,
  clientName,
  repoUrl,
  projectUrl,
}: Props) => {
  return (
    <div className="flex">
      {projectUrl && (
        <HoverIcon
          backgroundColor={backgroundColor}
          iconUrl={projectUrl}
          tooltipComponent={<ProjectLinkTooltip />}
          svgIcon={<ProjectLinkIcon />}
        />
      )}
      {clientUrl && (
        <HoverIcon
          backgroundColor={backgroundColor}
          iconUrl={clientUrl}
          tooltipComponent={<ClientLinkTooltip tooltipText={clientName} />}
          svgIcon={<ClientLinkIcon />}
        />
      )}
      {repoUrl && (
        <HoverIcon
          backgroundColor={backgroundColor}
          iconUrl={repoUrl}
          tooltipComponent={<GithubLinkTooltip />}
          svgIcon={<GithubLinkIcon />}
        />
      )}
    </div>
  );
};
