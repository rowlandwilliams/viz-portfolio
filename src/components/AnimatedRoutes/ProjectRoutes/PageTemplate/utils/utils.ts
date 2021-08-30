const offset = 40 + 15 + 12;
const mobileImgHeight = 350;

export const setImgHeightOnWindowSize = (
  current: HTMLDivElement,
  setImgHeight: (value: React.SetStateAction<number>) => void
) => {
  if (window.innerWidth < 768) {
    setImgHeight(mobileImgHeight);
  } else setImgHeight(window.innerHeight - current.clientHeight - offset);
};
