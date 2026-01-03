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
      {/* Desktop Sidebar - Apple Liquid Glass Style */}
      <aside className="hidden md:flex fixed left-6 top-6 bottom-6 z-40 w-64 flex-col">
        <div className="flex-1 flex flex-col rounded-3xl overflow-hidden relative">
          {/* Glass background layers */}
          <div className="absolute inset-0 bg-white/40 dark:bg-white/5 backdrop-blur-2xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/40 dark:from-white/10 dark:via-white/5 dark:to-white/10" />
          <div className="absolute inset-[1px] rounded-[23px] bg-gradient-to-b from-white/80 to-transparent dark:from-white/20 dark:to-transparent opacity-50" />
          {/* Subtle inner shadow */}
          <div className="absolute inset-0 rounded-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),inset_0_-1px_1px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-1px_1px_rgba(0,0,0,0.2)]" />
          {/* Border */}
          <div className="absolute inset-0 rounded-3xl border border-white/50 dark:border-white/10" />

          {/* Content */}
          <div className="relative z-10 flex flex-col flex-1">
            {/* Profile section */}
            <div className="p-6 pb-4">
              <Link href="/" className="group flex items-center gap-4">
                <Avatar className="size-12 border-2 border-white/50 dark:border-white/20 shadow-lg">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback className="bg-gradient-to-br from-sky-400 to-blue-600 text-white font-semibold">
                    {DATA.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-white">{DATA.name}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{DATA.location}</p>
                </div>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-2">
              <ul className="space-y-1">
                {DATA.navbar.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "group flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300",
                          isActive
                            ? "bg-white/60 dark:bg-white/10 text-zinc-900 dark:text-white shadow-sm"
                            : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/5"
                        )}
                      >
                        <div className={cn(
                          "flex items-center justify-center size-8 rounded-xl transition-all duration-300",
                          isActive
                            ? "bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-lg shadow-blue-500/30"
                            : "bg-zinc-100/80 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-300"
                        )}>
                          <item.icon className="size-4" />
                        </div>
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Bottom section */}
            <div className="p-4">
              <div className="flex items-center justify-center gap-1 p-2 rounded-2xl bg-white/30 dark:bg-white/5">
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
                          className="flex items-center justify-center size-9 rounded-xl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-200"
                        >
                          <social.icon className="size-4" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p>{name}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                <div className="w-px h-5 bg-zinc-300/50 dark:bg-zinc-700/50 mx-1" />
                <ModeToggle ariaLabel="Toggle theme" />
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Bar - Liquid Glass */}
      <nav className="md:hidden fixed bottom-4 left-4 right-4 z-40">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Glass layers */}
          <div className="absolute inset-0 bg-white/50 dark:bg-white/10 backdrop-blur-2xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/30 dark:from-white/15 dark:to-white/5" />
          <div className="absolute inset-0 rounded-3xl border border-white/60 dark:border-white/10" />
          <div className="absolute inset-0 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]" />

          {/* Content */}
          <div className="relative z-10 flex items-center justify-around px-2 py-3">
            {DATA.navbar.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Tooltip key={item.href}>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center justify-center size-12 rounded-2xl transition-all duration-300",
                        isActive
                          ? "bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-lg shadow-blue-500/30"
                          : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10"
                      )}
                    >
                      <item.icon className="size-5" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
