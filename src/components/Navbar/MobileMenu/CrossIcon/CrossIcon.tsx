interface Props {
  handleBurgerClick: () => void;
}

export const CrossIcon = ({ handleBurgerClick }: Props) => {
  return (
    <div onClick={handleBurgerClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
      >
        <line x2="30" y2="30" />
        <line x1="30" y2="30" />
      </svg>
    </div>
  );
};
