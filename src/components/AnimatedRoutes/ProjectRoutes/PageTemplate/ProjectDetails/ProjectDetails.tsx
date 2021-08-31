import { LinkObject } from "../../../../../types";
import { FadeInOnScrollComponent } from "../FadeInOnScrollComponent/FadeInOnScrollComponent";
import { ProjectLinks } from "./ProjectLinks/ProjectLinks";
import { ProjectTechnologies } from "./ProjectTechnologies/ProjectTechnologies";

interface Props {
  projectLinks: LinkObject[] | undefined;
  clientUrl: string | undefined;
  relevantLinks: string[] | undefined;

  projectTechnologies: string[] | undefined;
}

export const ProjectDetails = ({
  projectLinks,
  clientUrl,
  projectTechnologies,
  relevantLinks,
}: Props) => {
  return (
    <>
      {(clientUrl || projectTechnologies) && (
        <FadeInOnScrollComponent>
          <div className="py-16 border-t border-black w-3/4">
            <ProjectLinks
              projectLinks={projectLinks}
              relevantLinks={relevantLinks}
            />
            <ProjectTechnologies
              projectTechnologies={projectTechnologies}
              clientUrl={clientUrl}
            />
          </div>
        </FadeInOnScrollComponent>
      )}
    </>
  );
};
