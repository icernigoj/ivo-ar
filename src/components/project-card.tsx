import React from 'react';
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "group flex gap-4",
        className
      )}
    >
      {(video || image) && (
        <Link
          href={href || "#"}
          target={href ? "_blank" : undefined}
          className="block overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 shrink-0 w-20 h-20"
        >
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
          {image && !video && (
            <Image
              src={image}
              alt={title}
              width={80}
              height={80}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
        </Link>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-medium text-zinc-900 dark:text-white">{title}</h3>
          <span className="text-xs text-zinc-500 shrink-0">{dates}</span>
        </div>
        <Markdown className="prose prose-sm prose-zinc dark:prose-invert prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-p:my-1 prose-li:my-0.5 prose-ul:my-1 prose-strong:text-zinc-700 dark:prose-strong:text-zinc-300 max-w-none text-sm">
          {description}
        </Markdown>
        {tags && tags.length > 0 && (
          <p className="text-xs text-zinc-500 mt-2">
            {tags.join(" · ")}
          </p>
        )}
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-2">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                {link.type}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
