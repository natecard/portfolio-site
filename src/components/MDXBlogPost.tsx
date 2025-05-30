import { format } from "@formkit/tempo";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

import type { BlogLayoutProps } from "@/types/Interfaces";
import "@/styles/markdown.css";

// Custom MDX components with proper typing
const components: MDXComponents = {
  h1: (props) => (
    <h1
      className="mb-4 text-4xl font-bold text-stone-600 dark:text-stone-300 sm:text-5xl"
      {...props}
    >
      {props.children}
    </h1>
  ),
  h2: (props) => (
    <h2
      className="mb-3 text-3xl font-semibold text-stone-600 dark:text-stone-300"
      {...props}
    >
      {props.children}
    </h2>
  ),
  h3: (props) => (
    <h3
      className="mb-2 text-2xl font-medium text-stone-600 dark:text-stone-300"
      {...props}
    >
      {props.children}
    </h3>
  ),
  p: (props) => (
    <p
      className="mb-4 text-base leading-relaxed text-slate-700 dark:text-slate-200"
      {...props}
    >
      {props.children}
    </p>
  ),
  a: (props) => (
    <Link
      href={props.href || "#"}
      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
      {...props}
    >
      {props.children}
    </Link>
  ),
  img: (props) => (
    <div className="my-6">
      <Image
        src={props.src || ""}
        alt={props.alt || ""}
        width={Number(props.width) || 800}
        height={Number(props.height) || 400}
        className="rounded-lg"
      />
    </div>
  ),
  pre: (props) => (
    <pre
      className="my-4 overflow-x-auto rounded-lg bg-gray-100 dark:bg-gray-800 p-4"
      {...props}
    >
      {props.children}
    </pre>
  ),
  code: (props) => (
    <code
      className="rounded bg-gray-100 dark:bg-gray-800 px-1 py-0.5 text-sm"
      {...props}
    >
      {props.children}
    </code>
  ),
  blockquote: (props) => (
    <blockquote
      className="my-4 border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-600 dark:text-gray-300"
      {...props}
    >
      {props.children}
    </blockquote>
  ),
  ul: (props) => (
    <ul
      className="my-1 text-base list-disc pl-6 text-slate-700 dark:text-slate-200"
      {...props}
    >
      {props.children}
    </ul>
  ),
  ol: (props) => (
    <ol
      className="my-1 text-base list-decimal pl-6 text-slate-700 dark:text-slate-200"
      {...props}
    >
      {props.children}
    </ol>
  ),
  li: (props) => (
    <li className=" text-base text-slate-700 dark:text-slate-200" {...props}>
      {props.children}
    </li>
  ),
};

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
  const formattedDate = format(date, { date: "full" });
  const tagList = Array.isArray(tags)
    ? tags
    : (tags ?? "").split(",").map((tag: string) => tag.trim());

  return (
    <article className="prose prose-lg mx-auto max-w-7xl px-4 py-8">
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
        <h1 className="mb-4 text-4xl font-bold text-stone-600 dark:text-stone-300 sm:text-5xl">
          {title}
        </h1>
        <div className="mb-4 dark:text-slate-100 text-slate-600">
          <span>By {author}</span>
          <span className="mx-2">•</span>
          <time>{formattedDate}</time>
        </div>
        {excerpt && (
          <p className="text-xl font-medium text-slate-600 dark:text-slate-200">
            {excerpt}
          </p>
        )}
      </header>

      <div className="markdown-content">
        <MDXRemote source={body} components={components} />
      </div>

      {tagList.length > 0 && (
        <footer className="mt-8 border-t pt-4">
          <div className="flex flex-wrap gap-2">
            {tagList.map((tag: string) => (
              <Link
                key={`${id}-${tag}`}
                href={`/blog/tag/${tag.toLowerCase()}`}
                className="rounded-full dark:bg-gray-600 bg-slate-200 px-3 py-1 text-sm hover:text-gray-600 hover:bg-gray-200"
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
