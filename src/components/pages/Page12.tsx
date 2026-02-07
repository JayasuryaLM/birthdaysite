import { motion } from 'motion/react';

export function Page12() {
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
        A small advice for future growth …
      </motion.h1>
      <motion.div
        className="text-lg text-rose-700 space-y-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className="italic">"Arivu mattum valantha pothathu,<br />
        light-ah neengalum valarunga…<br />
        illana mela thaan paakanum —<br />
        use Complan if needed." 😄</p>
        <p className="italic">"19 aagiruchu…<br />
        intha year aachum<br />
        oru 5px aachum valarunga." 😄</p>
      </motion.div>
    </motion.div>
  );
}
