import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function EscapingButton() {
  const [attempts, setAttempts] = useState(0);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Start button just below the text
  useEffect(() => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setPos({
      top: window.innerHeight / 2 + 100, // offset below text
      left: window.innerWidth / 2 - rect.width / 2,
    });
  }, []);

  const moveButton = () => {
    if (!buttonRef.current || attempts >= 10) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const padding = 16;

    const maxTop = window.innerHeight - rect.height - padding;
    const maxLeft = window.innerWidth - rect.width - padding;

    const newTop = Math.random() * (maxTop - padding) + padding;
    const newLeft = Math.random() * (maxLeft - padding) + padding;

    setPos({ top: newTop, left: newLeft });
    setAttempts(prev => prev + 1);
  };

  const handleMouseEnter = () => {
    if (attempts < 10) moveButton();
  };

  const handleClick = () => {
    if (attempts >= 10) setShowFinalMessage(true);
  };

  return (
    <>
      <motion.button
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        className="px-8 py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full shadow-lg"
        style={{
          position: 'fixed', // still fixed so it moves on hover
          top: pos.top,
          left: pos.left,
          boxShadow: '0 0 20px rgba(244,114,182,0.5)',
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        Next ❤️
      </motion.button>

      <AnimatePresence>
        {showFinalMessage && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-pink-100 to-rose-100 p-12 rounded-3xl shadow-2xl text-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 0.8 }}
            >
              <p
                className="text-4xl text-rose-600"
                style={{ fontFamily: 'Pacifico, cursive' }}
              >
                I love you endlessly 💕<br />
                please stay with me forever
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
