import { LinkObject } from "../../../../../../types";

interface Props {
  projectLinks: LinkObject[] | undefined;
  relevantLinks: string[] | undefined;
}

export const ProjectLinks = ({ projectLinks, relevantLinks }: Props) => {
  return (
    <>
      {projectLinks && (
        <div>
          <div className="mb-8">
            <div className="text-lg font-tt-interfaces-demi">Project Links</div>
            <div className="flex flex-col">
              {projectLinks.map((linkObj) => (
                <a
                  href={linkObj.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline"
                  key={linkObj.underlinedText}
                >
                  {linkObj.underlinedText
                    ? linkObj.underlinedText
                    : linkObj.link.replace("https://", "")}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
      {relevantLinks && (
        <div className="mb-8">
          <div className="text-lg font-tt-interfaces-demi">Relevant Links</div>
          <div className="flex flex-col">
            {relevantLinks.map((link) => (
              <a
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                className="underline"
              >
                {link.replace("https://", "").replace("/", "")}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
