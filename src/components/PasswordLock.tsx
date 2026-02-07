import { useState } from 'react';
import { useEffect, useRef } from 'react';

import { motion, AnimatePresence } from 'motion/react';
import { Lock, Heart } from 'lucide-react';

interface PasswordLockProps {
  onUnlock: () => void;
}

export function PasswordLock({ onUnlock }: PasswordLockProps) {
  const [password, setPassword] = useState('');
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [error, setError] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const correctPassword = 'MYHEARTISYOURS';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    if (password.toUpperCase() === correctPassword) {
      setIsUnlocking(true);
      setTimeout(() => {
        onUnlock();
      }, 2000);
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };






  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 p-6">
      <AnimatePresence>
        {isUnlocking && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-pink-100/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.5, 1] }}
              transition={{ duration: 1.5 }}
            >
              <Heart className="w-32 h-32 text-rose-500 fill-rose-500" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          boxShadow: '0 0 40px rgba(244, 114, 182, 0.3)',
        }}
      >
        <motion.div
          className="text-center mb-6"
          animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <div className="inline-block p-4 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full mb-4">
            <Lock className="w-12 h-12 text-rose-600" />
          </div>
          <h2 className="text-3xl text-rose-600 mb-2" style={{ fontFamily: 'Pacifico, cursive' }}>
            Enter Password
          </h2>
          {error && (
            <motion.p
              className="text-red-500 text-sm mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ❌ Incorrect password. Please try again.
            </motion.p>
          )}
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
              className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-rose-400 focus:outline-none transition-colors bg-white/50"
              autoFocus
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            style={{
              boxShadow: '0 0 20px rgba(244, 114, 182, 0.5)',
            }}
          >
            Unlock
          </button>

          <button
            type="button"
            onClick={() => setShowHint(!showHint)}
            className="w-full text-rose-500 hover:text-rose-600 transition-colors text-sm"
          >
            {showHint ? 'Hide Hint' : 'Need a hint?'}
          </button>

          <AnimatePresence>
            {showHint && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-pink-50 p-4 rounded-xl text-sm text-rose-700 overflow-hidden"
              >
                <p className="font-semibold mb-2">Password Hint:</p>
                <p className="mb-2">Your password is made by finding each letter in order using these clues:</p>
                <ol className="space-y-1 text-xs">
                  <li>• First letter of your father's name</li>
                  <li>• Last letter of our birthday month</li>
                  <li>• 5th letter of your name</li>
                  <li>• 2nd letter of our birthday month</li>
                  <li>• 2nd letter of your grandma's name</li>
                  <li>• First letter of your name</li>
                  <li>• 3rd letter of your father's name</li>
                  <li>• 3rd letter of your mom's name</li>
                  <li>• First letter of your grandma's name</li>
                  <li>• Last letter of February again</li>
                  <li>• 2nd letter of your current living place</li>
                  <li>• 2nd letter of your father's name</li>
                  <li>• First letter of your name again</li>
                  <li>• First letter of your grandma's name</li>
                </ol>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </div>
  );
}