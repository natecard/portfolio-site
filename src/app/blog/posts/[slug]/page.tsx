import type { Metadata } from "next";

import ErrorBoundary from "@/components/ErrorBoundary";
import MDXBlogPost from "@/components/MDXBlogPost";
import { getAllPosts, getPostBySlug } from "@/utils/blog";

interface PageParams {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageParams) {
  try {
    const resolvedParams = await params;
    const post = await getPostBySlug(resolvedParams.slug);

    if (!post) {
      throw new Error("Post not found");
    }

    const tagList = Array.isArray(post.tags)
      ? post.tags
      : (post.tags ?? "").split(",").map((tag: string) => tag.trim());

    // Convert post body to string, handling array and undefined cases
    const postBody = Array.isArray(post.body)
      ? post.body.join("")
      : post.body || "";

    return (
      <main className="container mx-auto py-8">
        <ErrorBoundary>
          <h1 className="mb-8 text-4xl font-bold">Blog Posts</h1>
          <MDXBlogPost {...post} body={postBody} tags={tagList} />
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
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  // Simple text extraction from markdown - remove markdown syntax
  const bodyText = Array.isArray(post.body)
    ? post.body.join("")
    : post.body || "";
  const plainTextBody = bodyText
    .replace(/[#*`_~\[\]()]/g, "") // Remove basic markdown characters
    .replace(/\n/g, " ") // Replace newlines with spaces
    .trim();
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
