import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Blog",
  description: `${DATA.name}'s thoughts on software development, life, and more.`,
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto py-12 sm:py-20 px-6 space-y-12">
        {/* Back link */}
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to Projects
          </Link>
        </BlurFade>

        {/* Header */}
        <section className="space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-300 dark:to-white bg-clip-text text-transparent">
              Blog
            </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Thoughts on software development, startups, and life.
            </p>
          </BlurFade>
        </section>

        {/* Posts */}
        <section className="space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <h2 className="text-sm font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
              Articles
            </h2>
          </BlurFade>

          <div className="space-y-3">
            {posts.length === 0 ? (
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <div className="rounded-2xl border-2 border-dashed border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 p-8 text-center">
                  <p className="text-zinc-500 dark:text-zinc-500 text-sm">
                    No posts yet. Check back soon!
                  </p>
                </div>
              </BlurFade>
            ) : (
              posts
                .sort((a, b) => {
                  if (
                    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
                  ) {
                    return -1;
                  }
                  return 1;
                })
                .map((post, id) => (
                  <BlurFade delay={BLUR_FADE_DELAY * 5 + id * 0.05} key={post.slug}>
                    <Link
                      className="group block p-4 -mx-4 rounded-2xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors"
                      href={`/blog/${post.slug}`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="font-medium text-zinc-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                            {post.metadata.title}
                          </p>
                          {post.metadata.summary && (
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-1">
                              {post.metadata.summary}
                            </p>
                          )}
                        </div>
                        <p className="text-xs text-zinc-400 dark:text-zinc-500 whitespace-nowrap">
                          {post.metadata.publishedAt}
                        </p>
                      </div>
                    </Link>
                  </BlurFade>
                ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
