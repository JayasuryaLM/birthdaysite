import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FloatingHearts } from './components/FloatingHearts';
import { PasswordLock } from './components/PasswordLock';
import { EscapingButton } from './components/EscapingButton';
import { Page1 } from './components/pages/Page1';
import { Page2 } from './components/pages/Page2';
import { Page3 } from './components/pages/Page3';
import { Page4 } from './components/pages/Page4';
import { Page5 } from './components/pages/Page5';
import { Page6 } from './components/pages/Page6';
import { Page7 } from './components/pages/Page7';
import { Page8 } from './components/pages/Page8';
import { Page9 } from './components/pages/Page9';
import { Page10 } from './components/pages/Page10';
import { Page11 } from './components/pages/Page11';
import { Page12 } from './components/pages/Page12';
import { Page13 } from './components/pages/Page13';
import { Page14 } from './components/pages/Page14';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    <Page1 key={0} />,
    <Page2 key={1} />,
    <Page3 key={2} />,
    <Page4 key={3} />,
    <Page5 key={4} />,
    <Page6 key={5} />,
    <Page7 key={6} />,
    <Page8 key={7} />,
    <Page9 key={8} />,
    <Page10 key={9} />,
    <Page11 key={10} />,
    <Page12 key={11} />,
    <Page13 key={12} />,
    <Page14 key={13} />,
  ];
  const audioRef = useRef<HTMLAudioElement | null>(null);
const [isMuted, setIsMuted] = useState(false);
useEffect(() => {
  audioRef.current = new Audio(`${process.env.PUBLIC_URL}/misc/bgmusic.mp3`);

  audioRef.current.loop = true;
  audioRef.current.volume = 0.4;
}, []);


  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getButtonText = () => {
    if (currentPage === pages.length - 1) {
      return 'The End';
    }
    const texts = ['Next', 'Continue', 'Turn the page'];
    return texts[currentPage % texts.length];
  };

  const toggleMute = () => {
  if (!audioRef.current) return;

  audioRef.current.muted = !isMuted;
  setIsMuted(!isMuted);
};


  if (!isUnlocked) {
  return (
    <PasswordLock
      onUnlock={() => {
        audioRef.current?.play().catch(() => {});
        setIsUnlocked(true);
      }}
    />
  );
}

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <FloatingHearts />
      <button
      style="margin: 20px !important;"
  onClick={toggleMute}
  as={motion.button}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="
    fixed top-8 right-4 z-50
    px-4 py-2
    bg-gradient-to-r from-pink-400 to-rose-400
    text-white
    rounded-full
    shadow-lg
    hover:shadow-xl
    font-medium
    transition-all duration-300
  "
  style={{
    boxShadow: "0 0 20px rgba(244, 114, 182, 0.5)",
     marginTop: '8px',  // ✅ add margin here
     marginLeft: '8px', // ✅ add margin here
  }}
>
  {isMuted ? "🔇 Muted" : "🔊 Music"}
</button>

      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="min-h-screen flex items-center justify-center p-6"
        >
          <div className="w-full max-w-3xl">
            {pages[currentPage]}
            
            {currentPage === pages.length - 1 ? (
              <EscapingButton />
            ) : (
              <motion.button
                onClick={handleNext}
                className="mt-8 px-8 py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mx-auto block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: '0 0 20px rgba(244, 114, 182, 0.5)',
                }}
              >
                {getButtonText()}
              </motion.button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;