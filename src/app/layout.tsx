import Sidebar from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          "bg-gradient-to-br from-slate-50 via-blue-50/30 to-sky-50/50",
          "dark:from-zinc-950 dark:via-slate-950 dark:to-zinc-900",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            {/* Ambient background effects */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
              {/* Large gradient blobs */}
              <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-sky-400/20 dark:bg-sky-500/10 rounded-full blur-[120px]" />
              <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-blue-400/15 dark:bg-blue-500/10 rounded-full blur-[100px]" />
              <div className="absolute -bottom-40 right-1/3 w-[400px] h-[400px] bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-[100px]" />
              {/* Subtle noise texture */}
              <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
              }} />
            </div>

            <div className="min-h-screen">
              <Sidebar />
              <main className="md:ml-[248px] pb-20 md:pb-0">
                {children}
              </main>
            </div>
          </TooltipProvider>
        </ThemeProvider>

        {process.env.GA_ID && <GoogleAnalytics gaId={process.env.GA_ID} />}
      </body>
    </html>
  );
}
