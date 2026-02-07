import { motion } from 'motion/react';

export function FloatingHearts() {
  const hearts = Array.from({ length: 15 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300 opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 15}px`,
          }}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: '-100vh',
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear',
          }}
        >
          {Math.random() > 0.5 ? '❤️' : '✨'}
        </motion.div>
      ))}
    </div>
  );
}
