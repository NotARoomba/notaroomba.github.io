import { RotatingButtonProps } from "../utils/Types";
import { Link as PageLink, scroller } from "react-scroll";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function RotatingButton({
  title,
  to = "",
  func,
}: RotatingButtonProps) {
  let className =
    "relative inline-flex w-28 xs:w-32 lg:w-44 h-14 cursor-pointer m-auto text-lg lg:text-2xl font-bold perspective-1000 z-10 rotate-button";
  let className2 =
    "transition-transform duration-300 before:text-white after:text-white transform-style-3d  -translate-z-[25px]";
  return (
    <motion.div
      className="mx-auto"
      initial={{ opacity: 0, width: 0 }}
      whileInView={{
        opacity: 1,
        width: "auto",
        transition: { duration: 0.75 },
      }}
      exit={{ opacity: 0, width: 0, transition: { duration: 0.75 } }}
    >
      {to != "" ? (
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
            onClick={() => {
              func();
              className += " a";
              className2 += " a";
            }}
          >
            <p className={className2} id={title}></p>
          </div>
        )
      )}
    </motion.div>
  );
}
