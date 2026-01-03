"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Markdown from "react-markdown";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const content = (
    <div className="flex gap-4">
      <Avatar className="size-10 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shrink-0">
        <AvatarImage src={logoUrl} alt={altText} className="object-cover" />
        <AvatarFallback className="rounded-md text-xs">{altText[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-medium text-sm text-zinc-900 dark:text-white">
              {title}
              {badges && badges.length > 0 && (
                <span className="ml-2 text-xs font-normal text-zinc-500 dark:text-zinc-400">
                  {badges.join(" · ")}
                </span>
              )}
            </h3>
            {subtitle && (
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-0.5">
                {subtitle}
              </p>
            )}
          </div>
          <span className="text-xs text-zinc-500 dark:text-zinc-500 whitespace-nowrap shrink-0">
            {period}
          </span>
        </div>
        {description && (
          <div className="mt-2">
            <Markdown className="prose prose-sm prose-zinc dark:prose-invert prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-p:my-1 prose-ul:my-1 prose-li:my-0 prose-strong:text-zinc-700 dark:prose-strong:text-zinc-300 max-w-none text-sm">
              {description}
            </Markdown>
          </div>
        )}
      </div>
    </div>
  );

  if (href && href !== "#") {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block py-4 -mx-2 px-2 rounded-lg hover:bg-zinc-100/50 dark:hover:bg-white/5 transition-colors"
      >
        {content}
      </Link>
    );
  }

  return <div className="py-4">{content}</div>;
};
