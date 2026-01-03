"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";

interface SparkleProps {
  size?: number;
  className?: string;
  delay?: number;
}

interface ExplodingSparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
}

export function Sparkle({ size = 20, className = "", delay = 0 }: SparkleProps) {
  const [clickCount, setClickCount] = useState(0);
  const [explosions, setExplosions] = useState<ExplodingSparkle[]>([]);
  const [isExploding, setIsExploding] = useState(false);

  const handleClick = useCallback(() => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount >= 3) {
      setIsExploding(true);
      // Create explosion sparkles
      const newExplosions: ExplodingSparkle[] = Array.from({ length: 20 }, (_, i) => ({
        id: Date.now() + i,
        x: (Math.random() - 0.5) * 300,
        y: (Math.random() - 0.5) * 300,
        size: Math.random() * 16 + 8,
        rotation: Math.random() * 360,
      }));
      setExplosions(newExplosions);
      setClickCount(0);

      // Clear explosions after animation
      setTimeout(() => {
        setExplosions([]);
        setIsExploding(false);
      }, 1500);
    }
  }, [clickCount]);

  return (
    <div className={`cursor-pointer ${className}`} onClick={handleClick}>
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        initial={{ opacity: 0.5, scale: 0.8 }}
        animate={
          isExploding
            ? { scale: [1, 1.5, 0], opacity: [1, 1, 0] }
            : {
                opacity: [0.6, 1, 0.6],
                scale: [0.9, 1.1, 0.9],
                rotate: [0, 10, 0],
              }
        }
        transition={
          isExploding
            ? { duration: 0.3 }
            : {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              }
        }
      >
        <path
          d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z"
          fill="currentColor"
        />
      </motion.svg>

      <AnimatePresence>
        {explosions.map((sparkle) => (
          <motion.svg
            key={sparkle.id}
            width={sparkle.size}
            height={sparkle.size}
            viewBox="0 0 24 24"
            fill="none"
            className="absolute text-sky-400 pointer-events-none"
            style={{ left: size / 2, top: size / 2 }}
            initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
            animate={{
              x: sparkle.x,
              y: sparkle.y,
              opacity: [1, 1, 0],
              scale: [0, 1.2, 0.8],
              rotate: sparkle.rotation,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <path
              d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z"
              fill="currentColor"
            />
          </motion.svg>
        ))}
      </AnimatePresence>
    </div>
  );
}
