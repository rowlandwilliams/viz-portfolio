interface Props {
  projectStack: string[];
  backgroundColor: string;
  isDesktop?: boolean;
}

export const StackLabels = ({
  projectStack,
  backgroundColor,
  isDesktop = false,
}: Props) => {
  const wrapperClass = isDesktop
    ? "flex px-2 md:hidden mb-8 text-xs"
    : "hidden md:flex px-2";

  return (
    <div className={wrapperClass}>
      {projectStack.map((stackItem) => (
        <div
          className={`mx-2 px-2 bg-${backgroundColor} bg-opacity-60 hover:bg-opacity-50 rounded-md`}
        >
          {stackItem}
        </div>
      ))}
    </div>
  );
};
