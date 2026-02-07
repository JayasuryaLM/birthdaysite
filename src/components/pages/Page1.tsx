import { motion } from 'motion/react';

export function Page1() {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-6xl mb-6 text-rose-500"
        style={{ fontFamily: 'Pacifico, cursive' }}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Happy Birthday, Mama Ponney!! ❤️
      </motion.h1>
      <motion.p
        className="text-xl text-rose-700"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Today is special because you were born.
      </motion.p>
    </motion.div>
  );
}
