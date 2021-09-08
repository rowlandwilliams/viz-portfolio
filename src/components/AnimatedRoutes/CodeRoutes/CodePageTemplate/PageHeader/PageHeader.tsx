import { PageIcons } from "./PageIcons/PageIcons";
import { PageTitle } from "./PageTitle/PageTitle";

interface Props {
  headerRef: React.RefObject<HTMLDivElement>;
  projectTitle: string;
  projectSubTitle: string | undefined;
  backgroundColor: string;
  clientUrl: string | undefined;
  clientName: string | undefined;
  repoUrl: string | undefined;
  projectUrl: string | undefined;
}

export const PageHeader = ({
  headerRef,
  projectTitle,
  projectSubTitle,
  backgroundColor,
  clientUrl,
  clientName,
  repoUrl,
  projectUrl,
}: Props) => {
  return (
    <div className="mb-4 md:mb-0 md:py-10" ref={headerRef}>
      <div className="flex justify-between items-start font-tt-interfaces-demi">
        <PageTitle projectTitle={projectTitle} />
        <PageIcons
          backgroundColor={backgroundColor}
          clientUrl={clientUrl}
          clientName={clientName}
          repoUrl={repoUrl}
          projectUrl={projectUrl}
        />
      </div>
      <div className=" opacity-75 pt-8 ">{projectSubTitle}</div>
    </div>
  );
};
