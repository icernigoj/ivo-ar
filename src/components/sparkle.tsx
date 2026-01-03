"use client";

import { motion } from "framer-motion";

interface SparkleProps {
  size?: number;
  className?: string;
  delay?: number;
}

export function Sparkle({ size = 20, className = "", delay = 0 }: SparkleProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      initial={{ opacity: 0.5, scale: 0.8 }}
      animate={{
        opacity: [0.6, 1, 0.6],
        scale: [0.9, 1.1, 0.9],
        rotate: [0, 10, 0],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <path
        d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z"
        fill="currentColor"
      />
    </motion.svg>
  );
}
