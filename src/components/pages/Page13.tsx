import { motion } from 'motion/react';

export function Page13() {
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
        My Weakness on You
      </motion.h1>
      <motion.div
        className="text-lg text-rose-700 space-y-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p>My weakness on you 😌</p>
        <p className="italic">"Madam, ungalukku kannu therila nalum,<br />
        antha kannu romba nallatha irukku."</p>
        <p className="italic">"Neenga enna 'Mama' nu koopidum pothu,<br />
        naan totally offfffff 😄<br />
        romba weak-aa irukken antha word-la."</p>
        <p>Your voice ❤️<br />
        (epachum oru paatu paadi anuppunga 🎶)</p>
      </motion.div>
    </motion.div>
  );
}
