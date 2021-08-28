interface Props {
  projectOverview: string | undefined;
}

export const ProjectOverview = ({ projectOverview }: Props) => {
  return (
    <div className="text-lg">
      <div className="text-xl font-tt-interfaces-demi mb-6">1. Overview</div>
      <div>{projectOverview}</div>
    </div>
  );
};
