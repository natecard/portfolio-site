import { format } from "@formkit/tempo";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";

import { useMDXComponents } from "@/mdx-components";
import type { BlogLayoutProps } from "@/types/Interfaces";
import "@/styles/markdown.css";

export default function MDXBlogPost({
  id,
  title,
  coverImage,
  author,
  date,
  excerpt,
  body,
  tags,
}: BlogLayoutProps) {
  // Use the shared MDX components from mdx-components.tsx
  const components = useMDXComponents({});

  const formattedDate = format(date, { date: "full" });
  const tagList = Array.isArray(tags)
    ? tags
    : (tags ?? "").split(",").map((tag: string) => tag.trim());
  return (
    <article className="mx-auto max-w-7xl px-4 py-8">
      <header className="mb-8 text-center">
        {coverImage && (
          <div className="relative mb-6 h-64 w-full overflow-hidden rounded-lg sm:h-96">
            <Image
              src={coverImage.startsWith("http") ? coverImage : coverImage}
              alt={title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
          {title}
        </h1>
        <div className="mb-4 text-secondary">
          <span>By {author}</span>
          <span className="mx-2">•</span>
          <time>{formattedDate}</time>
        </div>
        {excerpt && (
          <p className="text-center text-2xl mx-auto text-muted-foreground max-w-3/5">
            {excerpt}
          </p>
        )}
      </header>

      <div className="markdown-content mx-auto max-w-5xl">
        <MDXRemote source={body} components={components} />
      </div>

      {tagList.length > 0 && (
        <footer className="mt-8 border-t border-border pt-4">
          <div className="flex flex-wrap gap-2">
            {tagList.map((tag: string) => (
              <Link
                key={`${id}-${tag}`}
                href={`/blog/tag/${tag.toLowerCase()}`}
                className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground hover:bg-accent"
              >
                {tag}
              </Link>
            ))}
          </div>
        </footer>
      )}
    </article>
  );
}
