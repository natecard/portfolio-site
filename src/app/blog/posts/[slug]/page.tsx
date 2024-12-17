import { marked } from "marked";
import type { Metadata } from "next";

import BlogPost from "@/components/BlogPost";
import ErrorBoundary from "@/components/ErrorBoundary";
import type { BlogPostProps } from "@/types/Interfaces";
import { getAllPosts, getPostBySlug } from "@/utils/blog";

export default async function DisplayPost({ tags, slug }: BlogPostProps) {
  const post = await getPostBySlug(slug);
  const tagList = Array.isArray(tags)
    ? tags
    : (tags ?? "").split(",").map((tag: string) => tag.trim());

  return (
    <main>
      <ErrorBoundary>
        <article>
          <BlogPost
            key={post.id}
            title={post.title}
            body={
              Array.isArray(post.body) ? post.body.join("") : post.body || ""
            }
            author={post.author}
            date={post.date}
            excerpt={post.excerpt}
            coverImage={post.coverImage}
            slug={post.slug}
            tags={tagList}
            id={post.id}
          />
        </article>
      </ErrorBoundary>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  const plainTextBody = post.body
    ? marked(Array.isArray(post.body) ? post.body.join("") : post.body).replace(
        /<[^>]*>/g,
        "",
      )
    : "";
  const description =
    plainTextBody.substring(0, 160) ||
    post.excerpt ||
    "No description available";

  return {
    title: `${post.title} | Your Blog Name`,
    description: description,
    openGraph: {
      title: post.title,
      description: description,
      type: "article",
      authors: [post.author],
    },
  };
}
