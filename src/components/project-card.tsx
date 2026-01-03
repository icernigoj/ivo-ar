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
        "group flex flex-col h-full",
        className
      )}
    >
      {(video || image) && (
        <Link
          href={href || "#"}
          target={href ? "_blank" : undefined}
          className="block overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 mb-3"
        >
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="h-40 w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
          {image && !video && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="h-40 w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
        </Link>
      )}
      <div className="flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-medium text-zinc-900 dark:text-white">{title}</h3>
          <span className="text-xs text-zinc-500 shrink-0">{dates}</span>
        </div>
        <Markdown className="prose prose-sm prose-zinc dark:prose-invert prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-p:my-1 max-w-none text-sm flex-1">
          {description}
        </Markdown>
        {tags && tags.length > 0 && (
          <p className="text-xs text-zinc-500 mt-2">
            {tags.join(" · ")}
          </p>
        )}
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
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
