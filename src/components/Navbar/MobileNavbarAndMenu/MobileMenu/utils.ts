import classNames from "classnames";

export const getClassFromBurgerClick = (burgerIsClicked: boolean) =>
  classNames(
    "md:hidden w-full absolute transition-left duration-100 top-0 transform",
    {
      "left-full": !burgerIsClicked,
      "left-0": burgerIsClicked,
    },
    "p-4 bg-gray-100"
  );
