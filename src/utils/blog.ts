import fs from "fs";
import path from "path";

import matter from "gray-matter";

import type { Post } from "@/types/Interfaces";

const postsDirectory = path.join(process.cwd(), "public/lib");

export async function getAllPosts(): Promise<Post[]> {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        id: fileName.replace(/\.mdx$/, ""),
        slug: fileName.replace(/\.mdx$/, ""),
        title: data.title,
        date: data.date,
        author: data.author,
        excerpt: data.excerpt,
        coverImage: data.coverImage,
        body: content,
        tags: data.tags || [],
      } as unknown as Post;
    });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    id: slug,
    slug: slug,
    title: data.title,
    date: data.date,
    author: data.author,
    excerpt: data.excerpt,
    coverImage: data.coverImage,
    body: content,
    tags: data.tags || [],
  } as unknown as Post;
}
