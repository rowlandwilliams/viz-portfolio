interface Props {
  handleBurgerClick?: () => void;
  dimension?: number;
}

export const CrossIcon = ({ handleBurgerClick, dimension = 30 }: Props) => {
  return (
    <div onClick={handleBurgerClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={dimension}
        height={dimension}
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <line x2={dimension} y2={dimension} />
        <line x1={dimension} y2={dimension} />
      </svg>
    </div>
  );
};
