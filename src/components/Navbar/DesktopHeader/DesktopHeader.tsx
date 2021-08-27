import { Link } from "react-router-dom";

interface Props {
  burgerIsVisible: boolean;
}

export const DesktopHeader = ({ burgerIsVisible }: Props) => {
  return (
    <div className="absolute left-1/4 hidden md:flex origin-bottom-right-right origin-top-right transform -rotate-90 -translate-x-full  whitespace-nowrap">
      <Link to="/">
        <div className="flex justify-between items-center">
          <div className="font-tt-interfaces-demi text-xl mr-4">
            {burgerIsVisible ? <div>Rowland Williams</div> : <div>RW</div>}
          </div>
        </div>
      </Link>
    </div>
  );
};
