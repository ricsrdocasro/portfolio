import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMusic } from '../context/MusicContext';

const DynamicBackground = () => {
  const { scrollYProgress } = useScroll();
  const { isPlaying } = useMusic();

  // Map scroll progress to background colors
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.6, 1],
    [
      "#0a0a0a", // Start: Neutral 950 (Dark)
      "#0f172a", // Projects: Slate 950 (Cool Navy)
      "#1c1917", // Hobbies: Stone 950 (Warm Coffee)
      "#000000"  // End: Black
    ]
  );

  return (
    <>
      <motion.div
        style={{ backgroundColor }}
        className="fixed inset-0 w-full h-full -z-20 transition-colors duration-500 ease-in-out"
      />
      {isPlaying && (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.15, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
            className="fixed inset-0 w-full h-full -z-10 bg-purple-500 pointer-events-none mix-blend-overlay"
        />
      )}
    </>
  );
};

export default DynamicBackground;
