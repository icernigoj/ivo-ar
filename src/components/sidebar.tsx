"use client";

import { ModeToggle } from "@/components/mode-toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar - Gradient + Noise Style */}
      <aside className="hidden md:flex fixed left-6 top-6 bottom-6 z-40 w-56 flex-col">
        <div className="flex-1 flex flex-col rounded-xl relative">
          {/* Background container with overflow hidden for rounded corners */}
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-slate-50 to-zinc-100 dark:from-zinc-900 dark:via-slate-900 dark:to-zinc-950" />
            {/* Subtle color tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-blue-500/5 dark:from-sky-500/10 dark:via-transparent dark:to-blue-500/5" />
            {/* Noise texture */}
            <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }} />
          </div>
          {/* Border */}
          <div className="absolute inset-0 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 flex flex-col flex-1">
            {/* Profile section */}
            <div className="p-5 pb-4">
              <Link href="/" className="group block">
                <div className="flex items-start gap-3">
                  <Avatar className="size-10 border-2 border-white/50 dark:border-white/20 shadow-md rounded-lg shrink-0 mt-0.5">
                    <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                    <AvatarFallback className="bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium rounded-lg">
                      {DATA.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 py-0.5">
                    <p className="font-medium text-sm text-zinc-900 dark:text-white">{DATA.name}</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-2">
              <ul className="space-y-0.5">
                {DATA.navbar.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href} className="relative">
                      {isActive && (
                        <motion.div
                          layoutId="sidebar-active"
                          className="absolute inset-0 bg-white/60 dark:bg-white/10 rounded-lg"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}
                      <Link
                        href={item.href}
                        className={cn(
                          "relative block px-3 py-2 rounded-lg text-sm transition-colors duration-200",
                          isActive
                            ? "text-zinc-900 dark:text-white font-medium"
                            : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/5"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Bottom section */}
            <div className="p-3">
              <div className="flex items-center justify-center gap-1 p-1.5 rounded-lg bg-white/30 dark:bg-white/5">
                {Object.entries(DATA.contact.social)
                  .filter(([_, social]) => social.navbar)
                  .map(([name, social]) => (
                    <Tooltip key={name}>
                      <TooltipTrigger asChild>
                        <Link
                          aria-label={name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center size-8 rounded-md text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-200"
                        >
                          <social.icon className="size-4" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p>{name}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                <div className="w-px h-4 bg-zinc-300/50 dark:bg-zinc-700/50 mx-1" />
                <ModeToggle ariaLabel="Toggle theme" />
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Bar - Gradient + Noise */}
      <nav className="md:hidden fixed bottom-4 left-4 right-4 z-40">
        <div className="relative rounded-xl overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-50 via-slate-50 to-zinc-50 dark:from-zinc-900 dark:via-slate-900 dark:to-zinc-900" />
          {/* Subtle color tint */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 via-transparent to-blue-500/5 dark:from-sky-500/10 dark:via-transparent dark:to-blue-500/5" />
          {/* Noise texture */}
          <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }} />
          {/* Border */}
          <div className="absolute inset-0 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50" />

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-2 px-3 py-3">
            {/* Navigation row */}
            <div className="flex items-center justify-around">
              {DATA.navbar.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <div key={item.href} className="relative">
                    {isActive && (
                      <motion.div
                        layoutId="mobile-nav-active"
                        className="absolute inset-0 bg-white/60 dark:bg-white/15 rounded-md"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                    <Link
                      href={item.href}
                      className={cn(
                        "relative block px-3 py-1.5 rounded-md text-xs font-medium transition-colors duration-200",
                        isActive
                          ? "text-zinc-900 dark:text-white"
                          : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                      )}
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Social links + theme toggle row */}
            <div className="flex items-center justify-center gap-2 pt-1 border-t border-zinc-200/50 dark:border-zinc-800/50">
              {Object.entries(DATA.contact.social)
                .filter(([_, social]) => social.navbar)
                .map(([name, social]) => (
                  <Link
                    key={name}
                    aria-label={name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center size-8 rounded-md text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-200"
                  >
                    <social.icon className="size-4" />
                  </Link>
                ))}
              <div className="w-px h-4 bg-zinc-300/50 dark:bg-zinc-700/50 mx-1" />
              <ModeToggle ariaLabel="Toggle theme" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
