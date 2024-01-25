import { useState } from "react";
import { CardCarouselProps } from "../utils/Types";
import RotatingButton from "./RotatingButton";
import { AnimatePresence, motion } from "framer-motion";

export default function CardCarousel({ children }: CardCarouselProps) {
  const [index, setIndex] = useState([0, 0]);
  console.log(window.visualViewport?.width);
  return (
    <div className="w-screen h-full flex flex-col overflow-x-hidden -mt-12">
      <p className="text-4xl mb-4">{index[0]+1} / {children.length}</p>
      <div className="flex z-20 h-96 relative">
        <AnimatePresence>
          <motion.div
            key={index[0]}
            className="h-fit w-screen absolute"
            initial={{
              opacity: 0,
              x:
                -(window.visualViewport?.width ?? 2 / 8) * (index[1] - index[0]),
            }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            exit={{
              opacity: 1,
              x:
                (window.visualViewport?.width ?? 2 / 8) *
                (index[1] - index[0]),
              transition: { duration: 1 },
            }}
          >
            {children[index[0]]}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex gap-4 mx-auto mt-48 xs:mt-32 z-20">
        {index[0] > 0 && (
          <RotatingButton
            title="<"
            func={() => setIndex([index[0] - 1, index[0]])}
          />
        )}
        {index[0] < children.length - 1 && (
          <RotatingButton
            title=">"
            func={() => setIndex([index[0] + 1, index[0]])}
          />
        )}
      </div>
    </div>
  );
}
