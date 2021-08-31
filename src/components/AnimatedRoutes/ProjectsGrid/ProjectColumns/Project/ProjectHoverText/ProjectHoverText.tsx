interface Props {
  projectTitle: string;
  backgroundColor: string;
}

export const ProjectHoverText = ({ projectTitle, backgroundColor }: Props) => {
  return (
    <div
      className={`absolute top-0 w-full h-full text-center text-xs md:text-base text-opacity-0 hover:text-opacity-100 bg-${backgroundColor} transition-bg-opacity duration-200 bg-opacity-0 hover:bg-opacity-80 text-white`}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl">
        {projectTitle}
      </div>
    </div>
  );
};
