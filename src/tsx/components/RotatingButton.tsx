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
  const className = "relative inline-flex w-28 xs:w-32 lg:w-44 h-14 cursor-pointer m-auto text-lg lg:text-2xl font-bold perspective-1000 rotate-button";
  const className2 = "transition-transform duration-300 before:text-white after:text-white "
  return to != "" ? (
    !to.includes("http") ? (
      <PageLink
        className={className}
        delay={0}
        to={to}
        spy={true}
        smooth={true}
        isDynamic
        onSetActive={handleSetActive}
        duration={500}
      >
        <p className={className2} id={title}></p>
      </PageLink>
    ) : (
      <Link to={to} className={className}>
        <p className={className2} id={title}></p>
      </Link>
    )
  ) : (
    <div className={className} onClick={func}>
      <p className={className2} id={title}></p>
    </div>
  );
}
