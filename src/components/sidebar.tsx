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

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar - Minimal Glass Style */}
      <aside className="hidden md:flex fixed left-6 top-6 bottom-6 z-40 w-56 flex-col">
        <div className="flex-1 flex flex-col rounded-xl overflow-hidden relative">
          {/* Glass background layers */}
          <div className="absolute inset-0 bg-white/40 dark:bg-white/5 backdrop-blur-2xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/40 dark:from-white/10 dark:via-white/5 dark:to-white/10" />
          <div className="absolute inset-[1px] rounded-[11px] bg-gradient-to-b from-white/80 to-transparent dark:from-white/20 dark:to-transparent opacity-50" />
          {/* Border */}
          <div className="absolute inset-0 rounded-xl border border-white/50 dark:border-white/10" />

          {/* Content */}
          <div className="relative z-10 flex flex-col flex-1">
            {/* Profile section */}
            <div className="p-5 pb-4">
              <Link href="/" className="group flex items-center gap-3">
                <Avatar className="size-10 border-2 border-white/50 dark:border-white/20 shadow-md rounded-lg">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback className="bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium rounded-lg">
                    {DATA.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm text-zinc-900 dark:text-white">{DATA.name}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{DATA.location}</p>
                </div>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-2">
              <ul className="space-y-0.5">
                {DATA.navbar.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-3 py-2 rounded-lg text-sm transition-all duration-200",
                          isActive
                            ? "bg-white/60 dark:bg-white/10 text-zinc-900 dark:text-white font-medium"
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

      {/* Mobile Bottom Bar - Minimal Glass */}
      <nav className="md:hidden fixed bottom-4 left-4 right-4 z-40">
        <div className="relative rounded-xl overflow-hidden">
          {/* Glass layers */}
          <div className="absolute inset-0 bg-white/50 dark:bg-white/10 backdrop-blur-2xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/30 dark:from-white/15 dark:to-white/5" />
          <div className="absolute inset-0 rounded-xl border border-white/60 dark:border-white/10" />

          {/* Content */}
          <div className="relative z-10 flex items-center justify-around px-2 py-2">
            {DATA.navbar.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200",
                    isActive
                      ? "bg-white/60 dark:bg-white/15 text-zinc-900 dark:text-white"
                      : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
