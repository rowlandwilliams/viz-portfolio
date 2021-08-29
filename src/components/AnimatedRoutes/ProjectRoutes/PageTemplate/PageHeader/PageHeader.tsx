import { PageIcons } from "./PageIcons/PageIcons";
import { PageTitle } from "./PageTitle/PageTitle";

interface Props {
  projectTitle: string;
  backgroundColor: string;
  clientUrl: string | undefined;
  clientName: string | undefined;
  repoUrl: string | undefined;
  projectUrl: string | undefined;
}

export const PageHeader = ({
  projectTitle,
  backgroundColor,
  clientUrl,
  clientName,
  repoUrl,
  projectUrl,
}: Props) => {
  return (
    <div className="flex justify-between items-start mb-4 md:mb-12 font-tt-interfaces-demi">
      <PageTitle projectTitle={projectTitle} />
      <PageIcons
        backgroundColor={backgroundColor}
        clientUrl={clientUrl}
        clientName={clientName}
        repoUrl={repoUrl}
        projectUrl={projectUrl}
      />
    </div>
  );
};
