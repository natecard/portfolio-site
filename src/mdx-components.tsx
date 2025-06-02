import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";

import Skills from "@/components/Skills";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Override the default heading components with custom styling
    h1: ({ children }) => (
      <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-3 text-3xl font-semibold text-foreground">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-2 text-2xl font-medium text-foreground">{children}</h3>
    ),
    // Override paragraph styling
    p: ({ children }) => (
      <p className="mb-4 text-base leading-relaxed text-foreground">
        {children}
      </p>
    ),
    // Override link styling
    a: ({ href, children }) => (
      <Link
        href={href || "#"}
        className="text-primary hover:text-primary/80 underline"
      >
        {children}
      </Link>
    ),
    // Override image component to use Next.js Image
    img: ({ src, alt, width, height, ...props }) => (
      <div className="my-6">
        <Image
          src={src || ""}
          alt={alt || ""}
          width={Number(width) || 800}
          height={Number(height) || 400}
          className="rounded-lg"
          {...props}
        />
      </div>
    ),
    // Override code blocks
    pre: ({ children }) => (
      <pre className="my-4 overflow-x-auto rounded-lg bg-muted p-4">
        {children}
      </pre>
    ),
    code: ({ children }) => (
      <code className="rounded bg-muted px-1 py-0.5 text-sm">{children}</code>
    ),
    // Override blockquote
    blockquote: ({ children }) => (
      <blockquote className="my-4 border-l-4 border-border pl-4 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
    // Override list items
    ul: ({ children }) => (
      <ul className="my-4 list-disc space-y-2 pl-6 text-foreground">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="my-4 list-decimal space-y-2 pl-6 text-foreground">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="text-foreground">{children}</li>,
    // Custom components
    Skills,
    ...components,
  };
}
