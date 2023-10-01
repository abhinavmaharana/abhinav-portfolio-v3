import { motion } from "framer-motion";

interface params {
  children: React.ReactNode;
  y: number;
}

function FadeVertical({ children, y }: params) {
  return (
    <motion.div
      className="w-full"
      initial={{
        x: 0,
        y: y,
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

export default FadeVertical;
