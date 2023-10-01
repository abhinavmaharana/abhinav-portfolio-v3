import { motion } from "framer-motion";

interface params {
  children: React.ReactNode;
  x: number;
}

function FadeHorizontal({ children, x }: params) {
  return (
    <motion.div
      className="w-full"
      initial={{
        x: x,
        y: 0,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        y: 0,
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeHorizontal;
