import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { Metadata } from "next";
import Markdown from "react-markdown";

export const metadata: Metadata = {
  title: "Piano",
  description: `${DATA.name}'s piano journey and repertoire.`,
};

const BLUR_FADE_DELAY = 0.04;

// Group songs by composer
function groupSongsByComposer(songs: typeof DATA.piano.songs) {
  type Song = (typeof DATA.piano.songs)[number];
  const groups: Record<string, Song[]> = {};
  songs.forEach((song) => {
    if (!groups[song.composer]) {
      groups[song.composer] = [];
    }
    groups[song.composer].push(song);
  });
  return groups;
}

export default function PianoPage() {
  const groupedSongs = groupSongsByComposer(DATA.piano.songs);
  const composers = Object.keys(groupedSongs);

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto py-12 sm:py-20 px-6 space-y-16">
        {/* Header */}
        <section className="space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-300 dark:to-white bg-clip-text text-transparent">
              Piano
            </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <Markdown className="prose prose-zinc dark:prose-invert prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-strong:text-zinc-900 dark:prose-strong:text-white max-w-none">
              {DATA.piano.introduction}
            </Markdown>
          </BlurFade>
        </section>

        {/* Stats */}
        <section>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="text-sm text-zinc-500">
              {DATA.piano.songs.length} pieces · {composers.length} composers · 15+ years playing
            </p>
          </BlurFade>
        </section>

        {/* Repertoire */}
        <section className="space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <h2 className="text-sm font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
              Repertoire
            </h2>
          </BlurFade>

          <div className="space-y-8">
            {composers.map((composer, composerIndex) => (
              <BlurFade
                key={composer}
                delay={BLUR_FADE_DELAY * 5 + composerIndex * 0.05}
              >
                <div className="group">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="size-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-600" />
                    {composer}
                    <span className="text-sm font-normal text-zinc-400">
                      ({groupedSongs[composer].length})
                    </span>
                  </h3>
                  <ul className="space-y-1 pl-4">
                    {groupedSongs[composer].map((song) => (
                      <li
                        key={song.title}
                        className="text-sm text-zinc-600 dark:text-zinc-400 py-1 border-l-2 border-zinc-200 dark:border-zinc-800 pl-4 hover:border-sky-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                      >
                        {song.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </BlurFade>
            ))}
          </div>
        </section>

        {/* Videos placeholder */}
        {DATA.piano.videos.length === 0 && (
          <section>
            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              <div className="rounded-lg border border-dashed border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 p-6 text-center">
                <p className="text-zinc-500 dark:text-zinc-500 text-sm">
                  Videos coming soon...
                </p>
              </div>
            </BlurFade>
          </section>
        )}
      </div>
    </div>
  );
}
