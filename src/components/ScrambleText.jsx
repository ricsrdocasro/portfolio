import { useEffect, useState, useRef } from "react";

const CYBER_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&<>/\\";

const ScrambleText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState("");
  const intervalRef = useRef(null);

  useEffect(() => {
    let iteration = 0;
    
    if (intervalRef.current) clearInterval(intervalRef.current);

    // Calculate speed dynamically to fit animation within ~1.2 seconds
    // faster for longer text, but with a minimum speed for short text
    const durationFrames = 40; // 40 * 30ms = 1200ms
    const step = Math.max(0.6, text.length / durationFrames);

    intervalRef.current = setInterval(() => {
      
      const result = text.split("").map((char, index) => {
        // If index is less than the floor of iteration, show the actual character
        if (index < Math.floor(iteration)) {
          return text[index];
        }
        // If index is exactly the floor of iteration, we are currently "typing" this char
        // Show a random cyber character
        if (index === Math.floor(iteration)) {
          return CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)];
        }
        // Otherwise, show nothing (not yet typed)
        return "";
      }).join("");

      setDisplayText(result);

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
        setDisplayText(text);
      }

      iteration += step; 
    }, 30);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text]);

  return <span className={className}>{displayText}</span>;
};

export default ScrambleText;
