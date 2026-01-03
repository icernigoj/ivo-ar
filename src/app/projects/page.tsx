import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description: `Side projects and work by ${DATA.name}.`,
};

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto py-12 sm:py-20 px-6 space-y-16">
        {/* Header */}
        <section className="space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-300 dark:to-white bg-clip-text text-transparent">
              Projects
            </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
              A collection of projects I&apos;ve built, from startups I co-founded
              to platforms serving millions of users.
            </p>
          </BlurFade>
        </section>

        {/* Projects Grid */}
        <section className="space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-sm font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
              Featured Work
            </h2>
          </BlurFade>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 4 + id * 0.1}
              >
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        {/* Blog Link */}
        <section>
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <Link
              href="/blog"
              className="group flex items-center justify-between p-6 rounded-2xl bg-gradient-to-br from-sky-500/10 via-blue-500/10 to-cyan-500/10 border border-zinc-200/50 dark:border-zinc-800/50 hover:border-sky-500/30 transition-colors"
            >
              <div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">Writing</h2>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Thoughts on tech, startups, and lessons learned
                </p>
              </div>
              <ArrowRight className="size-5 text-zinc-400 group-hover:text-sky-500 group-hover:translate-x-1 transition-all" />
            </Link>
          </BlurFade>
        </section>
      </div>
    </div>
  );
}
