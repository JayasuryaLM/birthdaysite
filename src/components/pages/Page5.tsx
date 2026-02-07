import { motion } from 'motion/react';

export function Page5() {
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
        From My Heart
      </motion.h1>
      <motion.div
        className="text-lg text-rose-700 space-y-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p>I love you more than you think.<br />
        Sometimes misunderstandings happen.</p>
        <p className="italic">"Ama naan solratha kekala na light-ah kovam varum thaan,<br />
        but adhu unna control panrathu illa."</p>
        <p>I never mean to hurt you.<br />
        My heart has always chosen you.</p>
      </motion.div>
    </motion.div>
  );
}
