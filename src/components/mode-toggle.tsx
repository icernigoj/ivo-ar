"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

interface ModeToggleProps {
  ariaLabel?: string;
}

export function ModeToggle({ ariaLabel }: ModeToggleProps) {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      className="flex items-center justify-center size-9 rounded-xl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-200"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={ariaLabel}
    >
      <SunIcon className="h-4 w-4 dark:hidden" />
      <MoonIcon className="hidden h-4 w-4 dark:block" />
    </button>
  );
}
