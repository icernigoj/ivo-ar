"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarEasterEggProps {
  name: string;
  initials: string;
  avatarUrl: string;
  altAvatarUrl?: string;
}

export function AvatarEasterEgg({
  name,
  initials,
  avatarUrl,
  altAvatarUrl,
}: AvatarEasterEggProps) {
  const [isWinking, setIsWinking] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setIsWinking(true);
    }, 3000);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    // Keep winking state for a bit before resetting
    if (isWinking) {
      setTimeout(() => setIsWinking(false), 500);
    }
  };

  return (
    <div
      className="relative inline-block cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/20 via-blue-500/20 to-cyan-500/20 rounded-full blur-2xl" />
      <motion.div
        animate={isWinking ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        <Avatar className="relative size-28 sm:size-36 border-4 border-white/10 shadow-2xl">
          <AvatarImage
            alt={name}
            src={isWinking && altAvatarUrl ? altAvatarUrl : avatarUrl}
          />
          <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
        </Avatar>
      </motion.div>

      {/* Wink overlay effect */}
      {isWinking && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            className="text-4xl"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            😉
          </motion.span>
        </motion.div>
      )}
    </div>
  );
}
