import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Experience",
  description: `${DATA.name}'s professional experience and education background.`,
};

const BLUR_FADE_DELAY = 0.04;

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto py-12 sm:py-20 px-6 space-y-16">
        {/* Header */}
        <section className="space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-300 dark:to-white bg-clip-text text-transparent">
              Work Experience
            </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              12+ years building products across startups and enterprises
            </p>
          </BlurFade>
        </section>

        {/* Work Experience */}
        <section id="work" className="space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-sm font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
              Experience
            </h2>
          </BlurFade>
          <div className="space-y-3">
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 4 + id * 0.05}
              >
                <ResumeCard
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <h2 className="text-sm font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
              Education
            </h2>
          </BlurFade>
          <div className="space-y-3">
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school + education.degree}
                delay={BLUR_FADE_DELAY * 11 + id * 0.05}
              >
                <ResumeCard
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
