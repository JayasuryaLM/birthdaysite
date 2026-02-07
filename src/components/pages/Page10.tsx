import { motion } from 'motion/react';

export function Page10() {
  return (
    <motion.div
      className="text-center max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="text-lg text-rose-700 space-y-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p>Challam, Pattu, Thangam, Vairam, Ammu, Bujji,<br />
        Darling, Cutie, Shorty, Chocolatey, Baby,<br />
        Desire, My Future, Beauty, Cutie, Sweety,<br />
        Naughty, Samathu Pulla…</p>
      </motion.div>
    </motion.div>
  );
}