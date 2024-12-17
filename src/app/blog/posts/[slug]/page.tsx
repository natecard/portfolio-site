import { marked } from "marked";
import type { Metadata } from "next";

import BlogPost from "@/components/BlogPost";
import ErrorBoundary from "@/components/ErrorBoundary";
import { getAllPosts, getPostBySlug } from "@/utils/blog";

interface PageParams {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: PageParams) {
  try {
    const post = await getPostBySlug(params.slug);
    if (!post) {
      throw new Error("Post not found");
    }

    const tagList = Array.isArray(post.tags)
      ? post.tags
      : (post.tags ?? "").split(",").map((tag: string) => tag.trim());

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
  } catch (error) {
    console.error("Error loading post:", error);
    return <div>Error loading post</div>;
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
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
    title: `${post.title} | Nate Card Software Developer`,
    description: description,
    openGraph: {
      title: post.title,
      description: description,
      type: "article",
      authors: [post.author],
    },
  };
}
