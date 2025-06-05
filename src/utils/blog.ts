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

      // Skip draft posts
      if (data.draft === true) {
        return null;
      }

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
    })
    .filter((post): post is Post => post !== null);

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

export async function getPostsByTag(tag: string): Promise<Post[]> {
	const allPosts = await getAllPosts();
  const posts = allPosts.filter((post) => post.tags?.includes(tag));
  return posts.map((post) => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    date: post.date,
    author: post.author,
    excerpt: post.excerpt,
    coverImage: post.coverImage,
    body: post.body,
    tags: post.tags,
  })) as unknown[] as Post[];
}
