import { format } from "@formkit/tempo";
import Image from "next/image";
import Link from "next/link";

import type { BlogListProps } from "@/types/Interfaces";

function BlogPostList({
  title,
  coverImage,
  author,
  excerpt,
  slug,
  date,
}: BlogListProps) {
  return (
    <div className="container mx-auto max-w-4xl p-4">
      <article className="group flex flex-row cursor-pointer rounded-xl hover:border-slate-800 hover:dark:text-blue-600 hover:text-slate-800 hover:dark:text-blue-700 border border-gray-200 p-6 transition-shadow hover:shadow-lg">
        <Link
          href={`/blog/posts/${slug}`}
          className="flex flex-row w-full gap-6"
        >
          <div className="flex flex-col flex-1">
            <h2 className="mb-2 text-2xl font-bold hover:dark:text-blue-600 hover:light:text-gray-900">
              {title}
            </h2>
            <div className="mb-4 text-sm">
              <span>{author}</span>
              <span className="mx-2">•</span>
              <time>{format(date, { date: "medium" })}</time>
            </div>
            <p className="">{excerpt}</p>
          </div>
          {coverImage && (
            <div className="relative w-1/2 h-full overflow-hidden rounded-xl">
              <Image
                src={coverImage}
                alt={title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                priority={false}
              />
            </div>
          )}
        </Link>
      </article>
    </div>
  );
}

export default BlogPostList;
