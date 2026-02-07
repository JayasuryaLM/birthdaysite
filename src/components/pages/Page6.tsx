import { motion } from 'motion/react';

export function Page6() {
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
        Our Bond & Future
      </motion.h1>
      <motion.div
        className="text-lg text-rose-700 space-y-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p>I don't want to miss you.<br />
        I need your presence, laughter, thoughts, energy.</p>
        <p>I want you to complete your studies and achieve your dreams.<br />
        I'll always support you.</p>
        <p>Problems will come, but we'll sort them together.</p>
        <p>I hope one day we grow old like our grandparents.</p>
        <p className="italic">"Namma grand children namma pics vachitu<br />
        'nalla pair ivanga' nu solra alavukku irundha pothum —<br />
        like what we did."</p>
        <p>Being from the same roots makes me feel lucky.</p>
      </motion.div>
    </motion.div>
  );
}
