import { motion, AnimatePresence } from "framer-motion";

function FirstCard() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%" }}
        transition={{ y: { duration: 0.4 } }}
      >
        <div className='card rounded-lg bg-red-400 h-60 w-60 flex justify-center items-center'></div>
      </motion.div>
    </AnimatePresence>
  );
}

export default FirstCard;
