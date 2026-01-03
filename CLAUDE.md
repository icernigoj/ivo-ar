# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/resume website built with Next.js 14 (App Router), React 18, and TailwindCSS. Static export deployed at https://ivo.ar.

## Commands

```bash
pnpm install         # Install dependencies
pnpm dev             # Start dev server (localhost:3000)
pnpm build           # Build static export to /out
pnpm lint            # Run ESLint
```

No test framework is configured.

## Architecture

### Tech Stack
- **Framework**: Next.js 14.2 with App Router and static export (`output: 'export'`)
- **UI**: shadcn/ui (new-york style) + Magic UI animation components + Radix primitives
- **Styling**: TailwindCSS with CSS variables for theming (dark/light mode via next-themes)
- **Animation**: Framer Motion with BlurFade staggered animations
- **Content**: MDX blog posts with rehype-pretty-code (Shiki) for syntax highlighting

### Key Directories
- `src/app/` - Next.js App Router pages (home, blog, blog/[slug])
- `src/components/ui/` - shadcn/ui primitives
- `src/components/magicui/` - Animation components (blur-fade, animated-grid, dock)
- `src/data/resume.tsx` - **Single source of truth** for all portfolio content
- `src/data/blog.ts` - Blog post parsing utilities
- `content/` - MDX blog posts with front matter

### Data Structure

All portfolio content lives in `src/data/resume.tsx` as a single `DATA` export containing:
- Personal info (name, avatar, location, summary)
- Work experience and education (with expandable descriptions)
- Skills (categorized) and languages
- Projects (with images/videos and tech badges)
- Contact info and social links
- Navbar configuration

### Patterns
- Server Components by default, `"use client"` only where needed
- `cn()` utility from `src/lib/utils.ts` for Tailwind class merging
- HSL color variables in `globals.css` for theme consistency
- `BLUR_FADE_DELAY` constant controls staggered animation timing
- Markdown rendering via react-markdown for rich text in descriptions

### Environment
- `GA_ID` - Google Analytics tracking ID (optional, see `.env.dist`)

## Deployment

Automatic deployment via GitHub Actions on push to `main` branch.

### How it works
1. GitHub Actions builds the static site (`pnpm build` → `/out` directory)
2. Rsync uploads `/out` to server at `/var/www/ivo-ar/out/`
3. Nginx serves the static files directly (no PM2/Node.js needed)

### Server
- **IP**: 62.72.8.28
- **User**: root
- **Path**: `/var/www/ivo-ar/out/`
- **Web server**: Nginx (config in `server-config/ivo-ar.nginx.conf`)

### GitHub Secrets Required
- `SSH_PRIVATE_KEY` - ED25519 private key for SSH access (same key as indicadores-ar)
- `GA_ID` - Google Analytics ID (optional)

### Manual deployment
```bash
pnpm build
rsync -avz --delete ./out/ root@62.72.8.28:/var/www/ivo-ar/out/
```

## Commit Guidelines

- **Do NOT** include Claude Code attribution or co-author lines in commit messages
- Keep commit messages clean and descriptive
