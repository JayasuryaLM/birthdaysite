import { useEffect, useRef } from 'react';

export function BackgroundMusic({ play }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (play) {
      audioRef.current.volume = 0.25;
      audioRef.current.play().catch(() => {});
    }
  }, [play]);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
         src={`${(import.meta as any).env.BASE_URL}misc/bgmusic.mp3`}
    />
  );
}
