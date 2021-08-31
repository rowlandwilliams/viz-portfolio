interface Props {
  clientUrl: string | undefined;
  projectTechnologies: string[] | undefined;
}

export const ProjectDetails = ({ clientUrl, projectTechnologies }: Props) => {
  return (
    <div className="py-8 border-t border-black w-3/4">
      <div className="mb-4">
        <div className="text-lg font-tt-interfaces-demi">Links</div>
        {clientUrl && (
          <div className="underline">{clientUrl.replace("https://", "")}</div>
        )}
      </div>
      <div className="mb-4">
        <div className="text-lg font-tt-interfaces-demi mb-2">
          Project Technologies
        </div>
        {projectTechnologies && (
          <div className="flex">
            {projectTechnologies.map((tag) => (
              <div className="mr-2 px-2 border border-black rounded-xl text-sm">
                {tag}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
