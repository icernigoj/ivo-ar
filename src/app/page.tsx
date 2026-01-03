import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Person Schema */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: DATA.name,
            url: DATA.url,
            image: `${DATA.url}${DATA.avatarUrl}`,
            jobTitle: "Fullstack Developer & Tech Lead",
            description: DATA.description,
            sameAs: [
              DATA.contact.social.LinkedIn.url,
              DATA.contact.social.GitHub.url,
              DATA.contact.social.X.url,
            ],
            knowsLanguage: DATA.languages.map((l) => l.name),
            worksFor: {
              "@type": "Organization",
              name: "COLAS",
              url: "https://www.colas.com/",
            },
            alumniOf: {
              "@type": "EducationalOrganization",
              name: "Universidad Tecnológica Nacional",
              url: "https://www.utn.edu.ar/es/",
            },
          }),
        }}
      />
      <div className="max-w-3xl mx-auto py-12 sm:py-20 px-6 space-y-16">
        {/* Hero */}
        <section id="hero" className="space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/20 via-blue-500/20 to-cyan-500/20 rounded-full blur-2xl" />
              <Avatar className="relative size-28 sm:size-36 border-4 border-white/10 shadow-2xl">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback className="text-2xl">{DATA.initials}</AvatarFallback>
              </Avatar>
            </div>
          </BlurFade>

          <div className="space-y-4">
            <BlurFadeText
              delay={BLUR_FADE_DELAY * 2}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-300 dark:to-white bg-clip-text text-transparent"
              yOffset={8}
              text={DATA.name}
            />
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 font-light">
                {DATA.description}
              </p>
            </BlurFade>
          </div>

          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="flex flex-wrap gap-3">
              <Link
                href={DATA.CVLink}
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Download CV
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                View Experience
              </Link>
            </div>
          </BlurFade>
        </section>

        {/* About */}
        <section id="about" className="space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-sm font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
              About
            </h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <Markdown className="prose prose-zinc dark:prose-invert prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-strong:text-zinc-900 dark:prose-strong:text-white prose-li:text-zinc-600 dark:prose-li:text-zinc-400 max-w-none">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </section>

        {/* Skills */}
        <section id="skills" className="space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-sm font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
              Skills
            </h2>
          </BlurFade>
          <div className="space-y-4">
            {DATA.skills.map((category, categoryIndex) => (
              <BlurFade key={category.category} delay={BLUR_FADE_DELAY * (8 + categoryIndex * 0.5)}>
                <div className="space-y-1.5">
                  <h3 className="text-xs font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-wide">
                    {category.category}
                  </h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">
                    {category.items.join(" · ")}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section id="languages" className="space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <h2 className="text-sm font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
              Languages
            </h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-wrap gap-6">
              {DATA.languages.map((language) => (
                <div
                  key={language.name}
                  className="flex items-center gap-2"
                >
                  <div className="size-6 rounded overflow-hidden">
                    <img
                      src={language.image}
                      alt={language.name}
                      className="size-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-sm text-zinc-900 dark:text-white">{language.name}</span>
                    <span className="text-sm text-zinc-500 ml-1">({language.level})</span>
                  </div>
                </div>
              ))}
            </div>
          </BlurFade>
        </section>

        {/* Contact CTA */}
        <section id="contact">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
              <p className="text-zinc-600 dark:text-zinc-400">
                Have a project in mind? Reach out on{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-zinc-900 dark:text-white hover:underline"
                >
                  LinkedIn
                </Link>{" "}
                or{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-zinc-900 dark:text-white hover:underline"
                >
                  Twitter/X
                </Link>
              </p>
            </div>
          </BlurFade>
        </section>
      </div>
    </div>
  );
}
