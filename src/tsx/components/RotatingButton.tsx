import { RotatingButtonProps } from "../utils/Types";
import { Link } from "react-scroll";

export default function RotatingButton({
  title,
  to = "",
  func,
}: RotatingButtonProps) {
  const handleSetActive = (to: string) => {
    console.log(to);
  };
  return (to !== "" ? (
    <Link className="rotate-button text-2xl font-bold w-44" to={to} spy={true}
    smooth={true}
    isDynamic
    onSetActive={handleSetActive}
    duration={500}><p id={title}></p></Link>
  ) : (
    <div className="rotate-button text-2xl font-bold" onClick={func}>
      <a id={title}></a>
    </div>
  ));
}
