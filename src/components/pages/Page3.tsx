import { motion } from 'motion/react';

export function Page3() {
  return (
    <motion.div
      className="text-center max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-5xl mb-8 text-rose-500"
        style={{ fontFamily: 'Pacifico, cursive' }}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Our Story
      </motion.h1>
      <motion.div
        className="text-lg text-rose-700 space-y-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p>We grew up together, surrounded by familiar faces, one big loving family.</p>
        <p>I still feel those childhood vibes —<br />
        the small fights (magnet kku sanda pottathu 😂),<br />
        silly arguments, games, funny and interesting talks.</p>
        <p>We were just kids, living in the moment.</p>
        <p>Life happened… we got separated.<br />
        During those years, something quietly grew inside.</p>
        <p>After more than five years, when we spoke again,<br />
        memories returned first… then feelings followed.</p>
        <p>What began as childhood moments became meaningful.</p>
      </motion.div>
    </motion.div>
  );
}
