interface Props {
  projectOverview: string[] | undefined;
}

export const ProjectOverview = ({ projectOverview }: Props) => {
  return (
    <>
      {projectOverview && (
        <div className="text-lg">
          <div>
            <div className="text-xl font-tt-interfaces-demi mb-6">
              1. Overview
            </div>
            {projectOverview.map((overviewParagraph) => (
              <div className="py-2">{overviewParagraph}</div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
