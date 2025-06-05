import BlogPostList from "@/components/BlogPostList";
import type { BlogListProps } from "@/types/Interfaces";
import { getPostsByTag } from "@/utils/blog";

export default async function BlogMainPage({
  params,
}: {
  params: { tag: string };
}) {
  const posts = await getPostsByTag(params.tag);

  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-8 text-4xl font-bold">{`Blog Posts with ${params.tag.charAt(0).toUpperCase() + params.tag.slice(1)}`}</h1>
      <div className="space-y-8">
        {posts.length > 0 ? (
          posts.map((post: BlogListProps) => (
            <BlogPostList key={post.id} {...post} />
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </div>
  );
}
