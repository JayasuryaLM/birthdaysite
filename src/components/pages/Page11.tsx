import { motion } from 'motion/react';

export function Page11() {
  const kisses = Array.from({ length: 50 }, (_, i) => i);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {kisses.map((i) => (
        <motion.div
          key={i}
          className="absolute text-rose-500"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 40 + 30}px`,
          }}
          initial={{ 
            scale: 0,
            rotate: 0,
          }}
          animate={{
            scale: [0, 1.2, 1],
            rotate: [0, 360, 0],
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        >
          💋
        </motion.div>
      ))}
      
      <motion.div
        className="text-9xl absolute"
        style={{ top: '30%' }}
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        💋
      </motion.div>
    </motion.div>
  );
}