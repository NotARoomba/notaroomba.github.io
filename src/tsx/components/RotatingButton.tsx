import { RotatingButtonProps } from "../utils/Types";
import { Link as PageLink } from "react-scroll";
import { Link } from "react-router-dom";

export default function RotatingButton({
  title,
  to = "",
  func,
}: RotatingButtonProps) {
  const handleSetActive = (to: string) => {
    console.log(to);
  };
  return to != "" ? (
    !to.includes("http") ? (
      <PageLink
        className="rotate-button text-2xl font-bold w-44"
        delay={0}
        to={to}
        spy={true}
        smooth={true}
        isDynamic
        onSetActive={handleSetActive}
        duration={500}
      >
        <p id={title}></p>
      </PageLink>
    ) : (
      <Link to={to} className="rotate-button text-2xl font-bold w-44">
        <p id={title}></p>
      </Link>
    )
  ) : (
    <div className="rotate-button text-2xl font-bold" onClick={func}>
      <p id={title}></p>
    </div>
  );
}
