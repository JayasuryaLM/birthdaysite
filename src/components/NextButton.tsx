import { Link } from "react-router";
import { motion } from "motion/react";

interface NextButtonProps {
  to: string;
  children: React.ReactNode;
}

export function NextButton({ to, children }: NextButtonProps) {
  return (
    <Link to={to}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full shadow-lg hover:shadow-pink-300/50 transition-shadow duration-300 font-medium"
      >
        {children}
      </motion.button>
    </Link>
  );
}
