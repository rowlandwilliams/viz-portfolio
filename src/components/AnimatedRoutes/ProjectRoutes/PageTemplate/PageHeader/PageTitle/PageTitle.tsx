interface Props {
  projectTitle: string;
}

export const PageTitle = ({ projectTitle }: Props) => {
  return <div className="text-3xl text-gray-800 w-3/4">{projectTitle}</div>;
};
