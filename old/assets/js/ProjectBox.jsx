import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";

const boxVariant = {
  visible: { opacity: 1, transition: { duration: 1 } },
  hidden: { opacity: 0 },
};

export default function ProjectBox({ imgPath, title, text, classN }) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <Tilt>
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className="project-box-outer"
      >
        <img className={classN ? classN : null} src={imgPath} />
        <div className="project-box-tt">
          <div className="project-box-title">{title}</div>
          <div className="project-box-text">{text}</div>
        </div>
      </motion.div>
    </Tilt>
  );
}
