"use client";

import { MLCProvider } from "../utils/llm";

export function Providers({ children }: { children: React.ReactNode }) {
  return <MLCProvider>{children}</MLCProvider>;
}
