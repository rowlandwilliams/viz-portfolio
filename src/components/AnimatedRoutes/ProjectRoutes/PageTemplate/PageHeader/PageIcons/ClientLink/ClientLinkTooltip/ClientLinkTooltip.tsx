interface Props {
  tooltipText: string | undefined;
}

export const ClientLinkTooltip = ({ tooltipText }: Props) => {
  return (
    <>
      <div>Explore</div>
      <div>{tooltipText}</div>
    </>
  );
};
