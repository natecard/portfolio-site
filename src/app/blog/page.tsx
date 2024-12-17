import BlogPostList from '@/components/BlogPostList';
import { getAllPosts } from '@/utils/blog';

export default async function BlogMainPage() {
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-8 text-4xl font-bold">Blog Posts</h1>
      <div className="space-y-8">
        {posts.length > 0 ? (
          posts.map((post: any) => <BlogPostList key={post.id} {...post} />)
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </div>
  );
}
