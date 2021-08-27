interface Props {
  handleBurgerClick: () => void;
}

export const BurgerIcon = ({ handleBurgerClick }: Props) => {
  return (
    <svg
      viewBox="0 0 100 80"
      width="30"
      height="30"
      onClick={handleBurgerClick}
    >
      <rect width="100" height="14"></rect>
      <rect y="30" width="100" height="14"></rect>
      <rect y="60" width="100" height="14"></rect>
    </svg>
  );
};
