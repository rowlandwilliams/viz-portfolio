interface Props {
  projectTechnologies: string[] | undefined;
  clientUrl: string | undefined;
}

export const ProjectTechnologies = ({
  projectTechnologies,
  clientUrl,
}: Props) => {
  return (
    <>
      {projectTechnologies && (
        <div className="mb-4">
          <div className="text-lg font-tt-interfaces-demi mb-2">
            Technologies used
          </div>
          <div className="flex flex-wrap">
            {projectTechnologies.map((tag) => (
              <div
                key={tag + clientUrl}
                className="mb-2 md:mb-0 mr-2 px-2 border border-black rounded-xl text-sm"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
