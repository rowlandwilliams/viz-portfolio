interface Props {
  burgerIsClicked: boolean;
  handleBurgerClick: () => void;
}

export const BurgerMenu = ({ burgerIsClicked, handleBurgerClick }: Props) => {
  return (
    <div className="md:hidden opacity-80" onClick={handleBurgerClick}>
      <svg viewBox="0 0 100 80" width="30" height="40">
        <rect width="100" height="14"></rect>
        <rect y="30" width="100" height="14"></rect>
        <rect y="60" width="100" height="14"></rect>
      </svg>
    </div>
  );
};
