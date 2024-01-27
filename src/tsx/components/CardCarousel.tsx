import { CardCarouselProps } from "../utils/Types";
import { AnimatePresence, motion } from "framer-motion";

export default function CardCarousel({ children, index }: CardCarouselProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.75, delay: 1 } }}
      className="w-screen h-full flex flex-col overflow-x-hidden -mt-12"
    >
      <div className="flex z-20 h-[60vh] xl:h-96 relative">
        <AnimatePresence>
          <motion.div
            key={index[0]}
            className="h-fit w-screen absolute"
            initial={{
              opacity: 0,
              x:
                -(window.visualViewport?.width ?? 2 / 8) *
                (index[1] - index[0]),
            }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            exit={{
              opacity: 1,
              x:
                (window.visualViewport?.width ?? 2 / 8) * (index[1] - index[0]),
              transition: { duration: 1 },
            }}
          >
            {children[index[0]]}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
