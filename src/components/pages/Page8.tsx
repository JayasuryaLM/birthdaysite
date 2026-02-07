import { motion } from 'motion/react';

export function Page8() {
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
        Favt One
      </motion.h1>
      <motion.div
        className="text-lg text-rose-700 space-y-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p>One of my favorites is your saree photo,<br />
        recreating your mummy's saree.</p>
        <p className="italic">"Naa already fall aagiten, madam…<br />
        again atha anuppi, mendum mendumaa?" 😄</p>
        <p>unoda old name rubikaa<br />
        athuvey enaku pudikum<br />
        yen mathunaga therla<br />
        bt ok</p>
        <p>Your care for dad, mum, and brother<br />
        shows how you'll care for your future kids.</p>
      </motion.div>
    </motion.div>
  );
}
