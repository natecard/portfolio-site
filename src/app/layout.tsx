import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ThemeProvider } from "@/components/theme-provider";

import { Providers } from "./providers";

export const metadata = {
  title: "Nate Card Portfolio",
  description: "A collection of projects and blog posts by Nate Card",
  charset: "UTF-8",
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
  rel: "stylesheet",
  href: "https://rsms.me/inter/inter.css",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text">
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
