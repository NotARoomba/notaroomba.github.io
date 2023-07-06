import { motion } from "framer-motion";
import React from "react";
const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};
const Transitions = (props) => {
    return (
        <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 5,type: "spring",stiffness: 50, mass: 5}}
        >
            {props.children}
        </motion.div>
    );
};
export default Transitions;