import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { Sparkle } from "@/components/sparkle";
import { DATA } from "@/data/resume";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: `Side projects and work by ${DATA.name}.`,
};

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto py-12 sm:py-20 px-6 space-y-16">
        {/* Header */}
        <section className="space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="relative inline-block">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-300 dark:to-white bg-clip-text text-transparent pb-2">
                Projects
              </h1>
              <Sparkle
                size={24}
                className="absolute -right-8 top-0 text-sky-400"
                delay={0}
              />
            </div>
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
            <h2 className="text-base font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
              Featured Work
            </h2>
          </BlurFade>
          <div className="space-y-6">
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
            <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
              <p className="text-zinc-600 dark:text-zinc-400">
                Read my{" "}
                <Link
                  href="/blog"
                  className="text-zinc-900 dark:text-white hover:underline"
                >
                  blog
                </Link>{" "}
                for thoughts on tech, startups, and lessons learned.
              </p>
            </div>
          </BlurFade>
        </section>
      </div>
    </div>
  );
}
