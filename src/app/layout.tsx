import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Nate Card Portfolio",
  description:
    "A collection of projects and blog posts by Nate Card. Explore iOS development, AI, and software engineering projects.",
  keywords: [
    "Nate Card",
    "portfolio",
    "web development",
    "blog",
    "ios",
    "macOS",
    "mobile apps",
    "iOS development",
    "macOS development",
    "AI",
    "software engineering",
    "projects",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Nate Card", url: "https://natecard.dev" }],
  openGraph: {
    title: "Nate Card Portfolio",
    description: "Explore projects and blog posts by Nate Card.",
    url: "https://natecard.dev",
    siteName: "Nate Card Portfolio",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nate Card Portfolio",
    description: "Explore projects and blog posts by Nate Card.",
    creator: "@nate_card",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className="bg-background text-foreground transition-colors">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            {children}
            <SpeedInsights />
            <Analytics />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
