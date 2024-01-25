import { RotatingButtonProps } from "../utils/Types";
import { Link as PageLink, scroller } from "react-scroll";
import { Link } from "react-router-dom";

export default function RotatingButton({
  title,
  to = "",
  func,
}: RotatingButtonProps) {
  const className =
    "relative inline-flex w-28 xs:w-32 lg:w-44 h-14 cursor-pointer m-auto text-lg lg:text-2xl font-bold perspective-1000 rotate-button";
  const className2 =
    "transition-transform duration-300 before:text-white after:text-white transform-style-3d  -translate-z-[25px]";
  return to != "" ? (
    !to.includes("http") ? (
      <PageLink
        className={className}
        delay={0}
        to={to}
        spy
        smooth
        isDynamic
        duration={500}
        onClick={() =>
          scroller.scrollTo(to, {
            delay: 0,
            spy: true,
            smooth: true,
            duration: 500,
          })
        }
      >
        <p className={className2} id={title}></p>
      </PageLink>
    ) : (
      <Link to={to} className={className}>
        <p className={className2} id={title}></p>
      </Link>
    )
  ) : (
    func && (
      <div
        className={className}
        onClick={(e) => {
          e.stopPropagation();
          func();
        }}
      >
        <p className={className2} id={title}></p>
      </div>
    )
  );
}
