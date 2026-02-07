import { motion } from 'motion/react';

export function Page4() {
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
        When We Realized Our Love
      </motion.h1>
      <motion.div
        className="text-lg text-rose-700 space-y-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p>After more than five years apart,<br />
        when we talked again,<br />
        silent feelings suddenly made sense.</p>
        <p>We couldn't hold back anymore.</p>
        <p className="italic">"Konjam overflow aagiruchu pasam… vera onnum illa."</p>
        <p>Friendship and memories quietly turned into real love.</p>
      </motion.div>
    </motion.div>
  );
}
