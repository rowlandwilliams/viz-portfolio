import { Github } from "./Github/Github";
import { SiteLink } from "./SiteLink/SiteLink";

interface Props {
  projectUrl?: string;
  repoUrl?: string;
  backgroundColor: string;
}

export const ThirdPartyIcons = ({
  projectUrl,
  repoUrl,
  backgroundColor,
}: Props) => {
  return (
    <div className="flex items-center opacity-60">
      {repoUrl && (
        <Github repoUrl={repoUrl} backgroundColor={backgroundColor} />
      )}
      {projectUrl && <SiteLink projectUrl={projectUrl} backgroundColor={backgroundColor}/>}
    </div>
  );
};
